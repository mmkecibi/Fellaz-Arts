"use strict";
import geohash from "ngeohash";
const utilsf = require( "../utils" );
const db = require('../../config/db.js'); 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const moment = require('moment');
const modelUtils = utilsf.modelUtils.getInstance();



class Userquery {
    static getInstance() {
        return new Userquery();
    }
    constructor() {
        this.pool = null;
    }

     getUser = async userId => {
        return await  db.User.forge({id: userId})
        .fetch({withRelated: ['users_roles','roles']})
        .then(function (user) {
        if (user) {
            return  user.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
    };


     getAllAgentTypeByType = async agenttypecode => {

  /*    this.sqlQueries = await modelUtils.loadSqlQueries( "users" );
       // get a connection to SQL Server
       const cnx = await cx.getConnection();

       // create a new request
        const request = await cnx.request();

       // configure sql query parameters 

      request.input( "agenttypecode", sql.VarChar( 50 ), agenttypecode );
       // return the executed query

      return request.query( this.sqlQueries.getAllAgentTypeByType)  */
   };

getUserClientByEmail = async email => {
    return await  db.User.forge({email: email})
    .fetch()
    .then(function (user) {
    if (user) {
        return  user.toJSON();
    }
    })
    .catch(function (err) {
        return false;
    })
};

   getUserClientByUserName = async username => {
    return await  db.User.forge({username: username})
    .fetch()
    .then(function (user) {
        if (user) {
        return  user.toJSON();
    }
    })
    .catch(function (err) {
        return false;
    })
    return null
};

     getUserByUserName = async username => {
        return await  db.User.forge({username: username})
        .fetch({withRelated: ['users_roles','roles']})
        .then(function (user) {
        if (user) {
            return  user.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
   };

   getUserByEmail = async email => {

    return await  db.User.forge({email: email})
    .fetch({withRelated: ['users_roles','roles']})
    .then(function (user) {
    if (user) {
        return  user.toJSON();
    }
    })
    .catch(function (err) {
        return err;
    })
 };

    getUserwithphotosById = async userId => {
        return await  db.User.forge({id: userId})
        .fetch({withRelated: ['photos']})
        .then(function (user) {
        if (user) {
            return  user.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
    };

    getAllUsers = async () => {
        return await  db.User.Users.forge()
        .fetch({withRelated: ['address','roles']})
        .then(function (users) {
        if (users) {
        return  users.toJSON();
        }
        })
        .catch(function (err) {
        return err;
        })
    };

    getUserById = async userId => {
        return await  db.User.forge({id: userId})
        .fetch({withRelated: ['address','roles']})
        .then(function (user) {
        if (user) {
        return  user.toJSON();
        }
        })
        .catch(function (err) {
        return err;
        })
    };

    agentavailibilitieszipcoderadusfinder = async (latitude,longitude,distance,radious,startdate,enddate,limitpage,lastid) => {

      if( (latitude !== null )&& (longitude !== null ) && (startdate === null )&& (enddate === null ))
        {
            return await   this.getAgentsByGeolocalization(latitude,longitude,distance,radious,limitpage,lastid);
        }
        if( (latitude === null )&& (longitude === null ) && (startdate !== null )&& (enddate !== null ))
        {
            return  await   this.getAgentsByAvailabilities(startdate,enddate,limitpage,lastid)
        }
        return await this.getAgentsByAvailabilitiesAndLocation(radious,latitude,longitude,distance,startdate,enddate,limitpage,lastid)
     
        };

/*****   Get All Ids  by creterea */
agentavailibilitieszipcoderadusfinderAllIds = async (latitude,longitude,distance,radious,startdate,enddate) => {

    if( (latitude !== null )&& (longitude !== null ) && (startdate === null )&& (enddate === null ))
      {
          return await   this.getAgentsByGeolocalizationAllIds(latitude,longitude,distance,radious);
      }
      if( (latitude === null )&& (longitude === null ) && (startdate !== null )&& (enddate !== null ))
      {
          return  await   this.getAgentsByAvailabilitiesAllIds(startdate,enddate)
      }
      return await this.getAgentsByAvailabilitiesAndLocationAllIds(radious,latitude,longitude,distance,startdate,enddate)
   
      };

      async getUsersByPageIds(limitpage,lastid){

         var params = {limitpage,lastid};
        let qry = " select DISTINCT u.id"
        qry += " from users u "
        qry += " where u.id > :lastid "
        qry += " order by u.id "
        qry += " Limit :limitpage"

        return  await   db.knex.raw(qry,params).then(function (user) {
                    if (user) {
                        return  user[0];
                    }
                    })
                    .catch(function (err) {
                        return err;
                    })
     }

    async getUsersByPage(limitpage,lastid){

        var params = {limitpage,lastid};
        let qry = " select DISTINCT u.*"
        qry += " from users u "
        qry += " where u.id > :lastid "
        qry += " order by u.id "
        qry += " Limit :limitpage"
            return  await   db.knex.raw(qry,params).then(function (user) {
                            if (user) {
                                return  user[0];
                            }
                            })
                            .catch(function (err) {
                                return err;
                            })
    }



  comparePassword = function(candidatePassword,password, callback){
        bcrypt.compare(candidatePassword, password, function(err, isMatch){
           if(err) {return callback(err);}
           callback(null, isMatch);
        });
     };

     getRoleIdByRoleName = async role_name => {
        return await  db.Role.forge({authority: role_name})
        .fetch()
        .then(function (role) {
        if (role) {
            return  role.id;
        }
        })
        .catch(function (err) {
            return err;
        })
   };   
  inserttUser = async (db,registerData ) => {
    console.log( "  registerData  ", registerData)
    if(registerData.captures == null || registerData.captures == undefined)
            registerData.captures = "";
    if(registerData.captures.length <= 2)
            registerData.captures = null;
        const salt = await bcrypt.genSalt(10);
       registerData.password = await bcrypt.hash(registerData.password, salt);
      let id_user = await  db.knex('users')
                .insert({
                          lastname:registerData.lastname,
                          firstname:registerData.firstname,
                          username: registerData.username,
                         password:registerData.password,
                         isactive: 1,
                           phone:registerData.phone,
                          email:registerData.email,
                          gender:registerData.gender,
                           photo: registerData.captures,
                          CreatedBy: registerData.username
                })
                .returning('id')
                .then(([id]) => { return id }).catch(function (err) {
                    console.log(err);
                }); 
                
                await  db.knex('address')
                .insert({
                            user_id :id_user,
                            street:registerData.addressLineOne,
                            city:registerData.city,
                            provaince:registerData.state,
                            country:registerData.country,
                            cp:registerData.postcode,
                            lat:registerData.lat,
                            lng:registerData.lng,
                            geohash: geohash.encode(registerData.lat , registerData.lng),
                            CreatedBy: registerData.username
                        })

                var roleid =  await  this.getRoleIdByRoleName(registerData.role_name);

                await  db.knex('users_roles')
                    .insert({
                                user_id :id_user,
                                role_id :roleid,
                                CreatedBy: registerData.username
                            })
                            
     };

     updateUserinfo = async (userData) => {
        if(userData.captures == null || userData.captures == undefined)
             userData.captures = "";
             await db.knex('users').where({id: userData.id })
                            .update({
                                    username:  userData.username ,
                                    lastname:  userData.lastname ,
                                    firstname:  userData.firstname,
                                    photo: userData.captures,
                                    phone:  userData.phone ,
                                    email:  userData.email ,
                                    gender:  userData.gender ,
                                    username:  userData.username ,
                                    ModifiedBy: userData.username
                                }).catch(function (err) {
                                    console.log(err);
                                }); 

                await db.knex('address').where({id: userData.address_id })
                .update({
                    street:  userData.addressLineOne ,
                    city:  userData.city ,
                    provaince:  userData.state ,
                    country:  userData.country ,
                    cp:  userData.postcode ,
                    lat:  userData.lat ,
                    lng:  userData.lng ,
                    ModifiedBy: userData.username,
                    geohash: geohash.encode(userData.lat , userData.lng) 
                }).catch(function (err) {
                    console.log(err);
                }); 
    };  


    createclientevents = async (ClientEventsData) => {

        ClientEventsData.forEach(element => {

                        let startlocal = null;
                        let endlocal = null;
                        startlocal =  new moment(element.start).format('YYYY-MM-DD hh:mm:ss');
                        endlocal = new moment(element.end).format('YYYY-MM-DD hh:mm:ss');
                        console.log("this.ClientEventsData element  ", element);
                        db.knex('calevents')
                        .insert({
                                    user_id :element.id_user,
                                    Start:startlocal,
                                    End:endlocal,
                                    color:element.color,
                                    name:element.name,
                                    details:element.details,
                                    Repeateventid: element.repeateventid,
                                    CreatedBy: element.username,
                                    Starttimestamp:element.strattimestamp,
                                    Endtimestamp:element.endtimestamp,
                                    clientid:element.clientid,
                                    eventtype:element.eventtype
                                }).catch(function (err) {
                                    console.log(err);
                                });

            }).catch(function (err) {
                console.log(err);
            });   
    }

    searchclientbyname = async name => {
        return await this.search("name",name)
      }
    searchclientbyemail = async email => {
        console.log(' adsvdasv ', email)
        return await this.search("email",email)
     }
     searchclientbyphone = async phone => {
        return await this.search("phone",phone)
     }
     search = async(searchtype,searchcriteria) => {

          var qrycondition = "";
         switch (searchtype) {
             case "name":
                 qrycondition = "  where lastname like '%"+searchcriteria+"%' or firstname like '%"+searchcriteria+"%'";
               break;
             case "email":
                 qrycondition = "  where email like '%"+searchcriteria+"%'";
               break;
             case "phone":
                 qrycondition = "  where phone like '%"+searchcriteria+"%'";
               break;
           }

         var params = {searchcriteria};
         let qry = " SELECT * "
                      qry += " FROM   users  "
                      qry += qrycondition
         return  await   db.knex.raw(qry).then(function (users) {
                     if (users) {
                         return  users[0];
                     }
                     })
                     .catch(function (err) {
                         console.log(" err   : ", err)
                         return err;
                     })
      }


      async getUserEvents(user_id){

        var params = {user_id:user_id};
        let qry = "";

                    qry = " SELECT cal.id,"
                    qry += "  cal.user_id,"
                    qry += " cal.Start,"
                    qry += " cal.End,"
                    qry += "  cal.Name,"
                    qry += " cal.Details,"
                    qry += "  cal.Color,"
                    qry += " cal.Repeateventid,"
                    qry += "  cal.Endtimestamp,"
                    qry += "  cal.Starttimestamp,"
                    qry += " cal.clientid,"
                    qry += " cal.eventtype,"
                    qry += "  u.photo,"
                    qry += " u.firstname,"
                    qry += "  u.lastname,"
                    qry += "  u.username,"
                    qry += " u.gender"
                    qry += "  FROM  users u left join  calevents cal  on u.id = cal.user_id"
                    qry += "  where u.id = :user_id"

                    console.log("tag  result qry", qry);

            return  await   db.knex.raw(qry,params).then(function (events) {
                            if (events) {
                                return  events[0];
                            }
                            })
                            .catch(function (err) {
                                return err;
                            })
     }

 }
exports.Userquery = Userquery;