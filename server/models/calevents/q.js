"use strict";
const db = require('../../config/db.js'); 
const utilsf = require( "../utils" );
const moment = require('moment');
const  CalorderlineViewModel = require('../modelview/Calorderline.js');
const CalorderlineVML = CalorderlineViewModel.CalorderlineViewModel.getInstance() ;
const  calcartViewModel = require('../modelview/Calcart.js');
const  calcartVML = calcartViewModel.CalcartViewModel.getInstance() ;
const  waitingroomViewModel = require('./../modelview/waitingroom.js');
const  waitingroomVML = waitingroomViewModel.WaitingroomViewModel.getInstance();
class Caleventquery {

        static getInstance() {
        return new Caleventquery();
    }
    constructor() {
      	console.log("Inside Caleventquery Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getCalevents(db){
            return  db.Calevent.Calevents.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                        })
                        .catch(function (err) {
                            return err ;
                        });
    }
//**********************************getUsers******************************************* */    
    getCaleventsByDt(db,dtl){
        var start = moment(dtl).format('YYYY-MM-DD 00:00:01');
        var end = moment(dtl).format('YYYY-MM-DD 23:59:59');  
   var sql = "SELECT *   FROM [Calendar].[dbo].[Calevent]   where entrydate >="+"'"+start+"' and entrydate <="+"'"+end+"'";
   return db.knex.raw(sql)
   .then((result) => {
       return result;
   })
   .catch((error) => {
       return error;
   });
}
//**************************************************************************************** */

//**********************************getUsers******************************************* */    
getCaleventsByMaxDt(db,dtl){

    var start = moment(dtl).format('YYYY-MM-DD 00:00:00');
    var end = moment(dtl).format('YYYY-MM-DD 23:59:59');  
    var sql = " SELECT *  FROM [Calendar].[dbo].[Calevent] where entrydate = (SELECT  MAX([entrydate])   FROM [Calendar].[dbo].[Calevent]   where entrydate >="+"'"+start+"' and entrydate <="+"'"+end+"')" 

    return db.knex.raw(sql)
    .then((result) => {
    return result;
    })
    .catch((error) => {
    return error;
    });
}
//**************************************************************************************** */



getProductByCalevents(db){
       
        var selectjoinrawSql = "SELECT * FROM  Calevent  left  join Calevents_products  on  Calevents_products.Calevent_id =  Calevents.id"
        return  db.knex.transaction(trx => { trx.raw(selectjoinrawSql).then(trx.commit, trx.rollback)})
        .catch(function (err) {
        });
}
//**************************************************************************************** */
//**********************************getByClientid*********************************************** */
    getCaleventByid(db,id){

            return   db.Calevent.query({where: {id:id}})
                        .fetch({withRelated: ['Calorderlines']})
                        .then(function (Calevent) {
                        if (Calevent) {
                           
                            return  Calevent;
                        }
                        })
                        .catch(function (err) {
                            return err;
                        })
        }

//**********************************getByWaitingroomid*********************************************** */
getCaleventByeventid(db,IDCalevent){
    return   db.Calevent.query({where: {IDCalevent:IDCalevent}})
              .fetch()
              .then(function (Calevent) {
              if (Calevent) {
                  return  Calevent;
              }
              })
              .catch(function (err) {
                  return err;
              })
}

//**************************************************************************************** */

    getCaleventByname(db,yearname){
        return   db.Calevent.query({where: {Year:yearname}})
                  .fetch()
                  .then(function (Calevent) {
                  if (Calevent) {
                      return  Calevent;
                  }
                  })
                  .catch(function (err) {
                      return err;
                  })
  }


//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByCaleventWithproducts_Caleventid(db,id){
          return   db.Calevent.forge({id:id})
                        .fetch({withRelated:['Calevents_users','Calevents_products']})
                        .then(function (Calevent) {
                        if (!Calevent) {
                           return err;
                        }
                        else {
                            return Calevent;
                        }
                        })
                        .catch(function (err) {
                            return err;
                    });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
//**************************************************************************************** */
move(db,res,req) {
    var body = req.body 
   
    var dtentre =  moment(new Date(body['eventcreate[entrydate]'])).format('YYYY-MM-DD hh:mm:ss') ;
   
    var dday = body['eventcreate[id]'].split('_')[0] 
   
    var sql = "Select  * from [Calendar].[dbo].[Calday] where CalmonthID = "+"'"+body['eventcreate[monthid]']+"' and Day = "+dday
   
    var sqldel = " delete  FROM [Calendar].[dbo].[Calevent] where id ="+"'"+body['eventcreate[idsql]']+"'" 

    return db.knex.raw(sqldel)
        .then(() => {
      
    return  db.knex.raw(sql)
               .then((result) => {
   
                   if(result.length > 0){
                                           return   db.knex('Calevent')
                                                       .insert({
                                                                   CaldayID:result[0].IDCalday,
                                                                   CalclientID:body['eventcreate[idcalclientevnt]'], 
                                                                   Factcode:body['eventcreate[factcode]'], 
                                                                   IDCalevent:body['eventcreate[id]'],
                                                                   TitleEn:body['eventcreate[title]'],   
                                                                   DesEn:body['eventcreate[desc]'],   
                                                                   Location:body['eventcreate[location]'],    
                                                                   DatetimeArry:body['eventcreate[datetime]'],   
                                                                   IsDeleted:0,   
                                                                   IsEdit:0,   
                                                                   IsNew:1,   
                                                                   Color:body['eventcreate[color]'],   
                                                                   Fonticonetype:body['eventcreate[fonticonetype]'],   
                                                                   Fonticonename:body['eventcreate[fonticonename]'],   
                                                                   Fonticonecategory:body['eventcreate[fonticonecategory]'],   
                                                                   Vip:body['eventcreate[vip]'],   
                                                                   Scrum:body['eventcreate[scrum]'], 
   
                                                                   Hr_Free:body['eventcreate[hrfees]'],
                                                                   Hr_Nbr:body['eventcreate[hrnbr]'],
   
                                                                   Montant_HT:body['eventcreate[montantht]'],
                                                                   Total_HT:body['eventcreate[totalht]'],
                           
                                                                   IsCompleted:((body['eventcreate[IsCompleted]'] == "true") ? 1 : 0),
                                                                   IsRefunded: 0,
   
                                                                   Total_TT:body['eventcreate[totaltt]'],
                                                                   Avance: (( body['eventcreate[avance]'] == "") ? 0 : body['eventcreate[avance]']), 
                                                                   Balance:body['eventcreate[balance]'],
                                                                   CalDatetime:body['eventcreate[caldatetime]'],
                                                                   entrydate:dtentre,
                                                                   Attending:body['eventcreate[attending]'],
                                                                   CreatedBy:body['createby']
                                                       }).returning('id').then(function([id]){
                                                               req.body['idcalevnt'] = id
                                                              CalorderlineVML.save(db,res,req);
                                                              calcartVML.saveCalcartAjax(db,req,"add");
                                                              waitingroomVML.saveWaitingRoomAjax(db,res,req);
                                                           return id;
                                                       }).catch(function (err) {
                                                           console.log("Errorhhhhhhhhrrrr ------- *****")
                                                           console.log(err)
                                                           return err;
                                                       });
                   }
   
               })
               .catch((error) => {
                   console.log("Errorrrrrrrrrrrrrrrrrrrrrrrrr ------- *****")
                   console.log(error)
                   return error;
               });
   
           })
           .catch((error) => {
               console.log(error)
               return error;
           });
       };
   //***************************** Add Update******************************************** */
//***************************** Add Update******************************************** */
//**************************************************************************************** */
save(db,res,req) {
 var body = req.body 

 var dtentre =  moment(new Date(body['eventcreate[entrydate]'])).format('YYYY-MM-DD hh:mm:ss') ;

 var dday = body['eventcreate[id]'].split('_')[0] 

 var sql = "Select  * from [Calendar].[dbo].[Calday] where CalmonthID = "+"'"+body['eventcreate[monthid]']+"' and Day = "+dday

 return  db.knex.raw(sql)
            .then((result) => {

                if(result.length > 0){
                                        return   db.knex('Calevent')
                                                    .insert({
                                                                CaldayID:result[0].IDCalday,
                                                                CalclientID:body['eventcreate[idcalclientevnt]'], 
                                                                Factcode:body['eventcreate[factcode]'], 
                                                                IDCalevent:body['eventcreate[id]'],
                                                                TitleEn:body['eventcreate[title]'],   
                                                                DesEn:body['eventcreate[desc]'],   
                                                                Location:body['eventcreate[location]'],    
                                                                DatetimeArry:body['eventcreate[datetime]'],   
                                                                IsDeleted:0,   
                                                                IsEdit:0,   
                                                                IsNew:1,   
                                                                Color:body['eventcreate[color]'],   
                                                                Fonticonetype:body['eventcreate[fonticonetype]'],   
                                                                Fonticonename:body['eventcreate[fonticonename]'],   
                                                                Fonticonecategory:body['eventcreate[fonticonecategory]'],   
                                                                Vip:body['eventcreate[vip]'],   
                                                                Scrum:body['eventcreate[scrum]'], 

                                                                Hr_Free:body['eventcreate[hrfees]'],
                                                                Hr_Nbr:body['eventcreate[hrnbr]'],

                                                                Montant_HT:body['eventcreate[montantht]'],
                                                                Total_HT:body['eventcreate[totalht]'],
                        
                                                                IsCompleted:((body['eventcreate[IsCompleted]'] == "true") ? 1 : 0),
                                                                IsRefunded: 0,

                                                                Total_TT:body['eventcreate[totaltt]'],
                                                                Avance: (( body['eventcreate[avance]'] == "") ? 0 : body['eventcreate[avance]']), 
                                                                Balance:body['eventcreate[balance]'],
                                                                CalDatetime:body['eventcreate[caldatetime]'],
                                                                entrydate:dtentre,
                                                                Attending:body['eventcreate[attending]'],
                                                                CreatedBy:body['createby']
                                                    }).returning('id').then(function([id]){
                                                            req.body['idcalevnt'] = id
                                                           CalorderlineVML.save(db,res,req);
                                                           calcartVML.saveCalcartAjax(db,req,"add");
                                                           waitingroomVML.saveWaitingRoomAjax(db,res,req);
                                                        return id;
                                                    }).catch(function (err) {
                                                        console.log("Errorhhhhhhhhrrrr ------- *****")
                                                        console.log(err)
                                                        return err;
                                                    });
                }

            })
            .catch((error) => {
                console.log("Errorrrrrrrrrrrrrrrrrrrrrrrrr ------- *****")
                console.log(error)
                return error;
            });

       /* })
        .catch((error) => {
            console.log(error)
            return error;
        });*/
    };
//***************************** Add Update******************************************** */
//***************************** Add Update******************************************** */
update(db,req) {
    var dt = moment().format('YYYY-MM-DD hh:mm:ss')
    var body = req.body 

    var dtentre =  moment(new Date(body['eventedit[entrydate]'])).format('YYYY-MM-DD hh:mm:ss') ;

            return db.knex
            .select('id')
            .from('Calevent')
            .where('id', body['eventedit[idsql]'])
            .then(([row]) => {
              if (!row) {
                console.log("select id do not exist")
                return res.send("do not exist")
              }
              return db.knex('Calevent')
              .update({
                            IDCalevent:body['eventedit[id]'],
                            CalclientID:body['eventedit[CalclientID]'], 
                            Factcode:body['eventedit[factcode]'], 
                            TitleEn:body['eventedit[title]'],   
                            DesEn:body['eventedit[desc]'],   
                            Location:body['eventedit[location]'],    
                            DatetimeArry:body['eventedit[datetime]'],   
                            IsDeleted:((body['eventedit[isdeleted]'] == "true") ? 1 : 0),   
                            IsEdit:1,   
                            IsNew:0,   
                            Color:body['eventedit[color]'],   
                            Fonticonetype:body['eventedit[fonticonetype]'],   
                            Fonticonename:body['eventedit[fonticonename]'],   
                            Fonticonecategory:body['eventedit[fonticonecategory]'],   
                            Vip:body['eventedit[vip]'],   
                            Scrum:body['eventedit[scrum]'], 
                            ModifiedDate:dt,
                            ModifiedBy:body['modby'],

                            IsCompleted:((body['eventedit[IsCompleted]'] == "true") ? 1 : 0),
                            IsRefunded:((body['eventedit[IsRefunded]'] == "true") ? 1 : 0),

                            Hr_Free:body['eventedit[hrfees]'],
                            Hr_Nbr:body['eventedit[hrnbr]'],
                           // Prix_Unit_HT:body['eventedit[prixunitht]'],
                            //Montant_HT:body['eventedit[montantht]'],
                            Total_HT:body['eventedit[totalht]'],
                           // Tax:body['eventedit[tax]'],
                            Total_TT:body['eventedit[totaltt]'],
                            Avance: (( body['eventedit[avance]'] == "") ? 0 : body['eventedit[avance]']), 
                          
                            entrydate:dtentre,


                            Balance:body['eventedit[balance]'],
                    })
                    .where('id',row.id)
                    .then(function(){
                           CalorderlineVML.update(db,req);
                           calcartVML.deletebyeventid(db,body['eventedit[idsql]']).then(function(){
                           calcartVML.saveCalcartAjax(db,req,"edit");
                           waitingroomVML.updateWaitingRoomAjax(db,req);
                        }).catch((error) => {
                           
                            return error;
                    });
                      return true;
                  }).catch((error) => {
                       
                        return error;
                });
            });
};
//**************************************************************************************** */
    delete(db,id){

            return db.knex
                        .select('id')
                        .from('Calevent')
                        .where('id', id)
                        .then(([row]) => {
                        if (!row) {
                            console.log("select id do not exist")
                            return res.send("do not exist")
                        }
                        return db.knex('Calevent')
                        .del()
                        .where('id',row.id)
            });
    };

}
//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.Caleventquery = Caleventquery;