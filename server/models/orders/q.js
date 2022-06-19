"use strict";
const db = require('../../config/db.js'); 
const utilsf = require( "../utils" );

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const moment = require('moment');
const modelUtils = utilsf.modelUtils.getInstance();



class Orderquery {
    static getInstance() {
        return new Orderquery();
    }
    constructor() {
        this.pool = null;
    }
    
    getclientshipping = async clientid => {

        return await  db.Shipping.forge({userId: clientid})
        .fetch()
        .then(function (shipping) {
            if (shipping) {

                return  shipping.toJSON();
            }
            return  null;
        })
        .catch(function (err) {
            return err;
        })
     };

     searchbyname = async name => {
       return await this.search("name",name)
     }
     searchbyemail = async email => {
       return await this.search("email",email)
    }
    searchbyphone = async phone => {
       return await this.search("phone",phone)
    }
    searchordernumber = async ordernumber => {
        return await this.search("ordernumber",ordernumber)
    }
    searchcreatedat = async createat => {
        return await this.search("createat",createat)
    }
     search = async(searchtype,searchcriteria) => {

         var qrycondition = "";
        switch (searchtype) {
            case "name":
                qrycondition = "  where lastname like '%"+searchcriteria+"%' or firstname like '%"+searchcriteria+"%'";
              break;
            case "email":
                qrycondition = "  where u.email like '%"+searchcriteria+"%'";
              break;
            case "phone":
                qrycondition = "  where u.phone like '%"+searchcriteria+"%'";
              break;
            case "ordernumber":
                qrycondition = "  where o.order_id like '%"+searchcriteria+"%'";
              break;
            case "createat":
                qrycondition = "  where  DATE_FORMAT(o.created_at,'\%Y-\%m-\%d')  ='"+searchcriteria+"'";
              break;
          }

        var params = {searchcriteria};
        let qry = " SELECT o.id, "
                     qry += " o.order_date, "
                     qry += " o.user_id, "
                     qry += " u.lastname , "
                     qry += " u.firstname , "
                     qry += " u.photo , "
                     qry += " o.order_id, "
                     qry += " o.payment_type, "
                     qry += " o.total_amount, "
                     qry += " o.payment_status, "
                     qry += " o.status, "
                     qry += " o.isapptoved "
                     qry += " FROM orders o join  users u on o.user_id = u.id "
                     qry += qrycondition


        return  await   db.knex.raw(qry).then(function (orders) {
                    if (orders) {

                        return  orders[0];
                    }
                    })
                    .catch(function (err) {
                        return err;
                    })
     }


    getorderswithitsusers = async () => {

       let qry = " SELECT o.id, "
                    qry += " o.order_date, "
                    qry += " o.user_id, "
                    qry += " u.lastname , "
                    qry += " u.firstname , "
                    qry += " u.photo , "
                    qry += " o.order_id, "
                    qry += " o.payment_type, "
                    qry += " o.total_amount, "
                    qry += " o.payment_status, "
                    qry += " o.status, "
                    qry += " o.isapptoved "
                    qry += " FROM orders o join  users u on o.user_id = u.id "

       return  await   db.knex.raw(qry).then(function (orders) {
                   if (orders) {
                       return  orders[0];
                   }
                   })
                   .catch(function (err) {
                       return err;
                   })
    }
    getOrderById = async orderid => {
        var params = {orderid};
        let qry = " SELECT o.id, "
                     qry += " o.order_date, "
                     qry += " o.user_id, "
                     qry += " u.lastname , "
                     qry += " u.firstname , "
                     qry += " u.photo , "
                     qry += " o.order_id, "
                     qry += " o.payment_type, "
                     qry += " o.total_amount, "
                     qry += " o.payment_status, "
                     qry += " o.status, "
                     qry += " o.isapptoved "
                     qry += " FROM orders o join  users u on o.user_id = u.id "
                     qry += " where o.id = :orderid "
        return  await   db.knex.raw(qry,params).then(function (order) {
                    if (order) {
                        return  order[0];
                    }
                    })
                    .catch(function (err) {
                        return err;
                    })
     }


    getorderDetailslistbyorderid = async orderid => {

        var params = {orderid};
       let qry = " SELECT od.id, "
                    qry += " od.product_order_id, "
                    qry += " od.product_order_name, "
                    qry += " od.product_order_name_fr, "
                    qry += " od.product_order_name_ar, "
                    qry += " od.product_order_price, "
                    qry += " od.product_order_discount, "
                    qry += " p.photo product_photo, "
                    qry += " p.color product_color, "
                    qry += " o.order_id, "
                    qry += " od.created_at, "
                    qry += " od.updated_at, "
                    qry += " od.product_order_quantity, "
                    qry += " od.product_order_id, "
                    qry += " od.size, "
                    qry += " od.weight, "
                    qry += " od.color_extraprice, "
                    qry += " o.payment_type, "
                    qry += " o.total_amount, "
                    qry += " o.status, "
                    qry += " o.isapptoved "
                    qry += " FROM orders o join  order_details od on o.id = od.order_id "
                    qry += " left join productcolorphotos p on p.id = od.productphotoid "
                    qry += " where o.id = :orderid "
       return  await   db.knex.raw(qry,params).then(function (orders) {
                   if (orders) {
                       return  orders[0];
                   }
                   })
                   .catch(function (err) {
                       return err;
                   })
    }

     getUOrderById = async orderId => {
        return await  db.Order.forge({id: orderId})
        .fetch({withRelated: ['order_details']})
        .then(function (order) {
        if (order) {
            return  order.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
    };

    getUOrderByClientId = async clientid => {
        return await  db.Order.forge({user_id: clientid})
        .fetch({withRelated: ['order_details']})
        .then(function (orders) {
        if (orders) {
            return  orders.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
    };

    getorderlistbyuserid = async clientid => {

        var params = {clientid};
       let qry = " SELECT od.id, "
                    qry += " od.product_order_id, "
                    qry += " od.product_order_name, "
                    qry += " od.product_order_name_fr, "
                    qry += " od.product_order_name_ar, "
                    qry += " od.product_order_price, "
                    qry += " od.product_order_discount, "
                    qry += " p.photo product_photo, "
                    qry += " p.color product_color, "
                    qry += " o.order_id, "
                    qry += " od.created_at, "
                    qry += " od.updated_at, "
                    qry += " od.product_order_quantity, "
                    qry += " od.product_order_id, "
                    qry += " od.size, "
                    qry += " od.weight, "
                    qry += " od.color_extraprice, "
                    qry += " o.payment_type, "
                    qry += " o.total_amount, "
                    qry += " o.status "
                    qry += " FROM orders o join  order_details od on o.id = od.order_id "
                    qry += " left join productcolorphotos p on p.id = od.productphotoid "
                    qry += " where o.user_id = :clientid "

       return  await   db.knex.raw(qry,params).then(function (orders) {
                   if (orders) {
                       return  orders;
                   }
                   })
                   .catch(function (err) {
                       return err;
                   })
    }

    getTaxes = async () => {
        return await  db.Taxe.Taxes.forge()
         .fetch()
         .then(function (Taxes) {
             if (Taxes) {
                console.log( ' Taxes.toJSON() ', Taxes.toJSON())
                 return  Taxes.toJSON();
             }
             return  null;
         })
         .catch(function (err) {
             return err;
         })
      };

      getTaxeById = async id => {
   
        return await db.Taxe.forge({id: id}) 
        .fetch()
        .then(function (taxe) {
        if (taxe) {
            return  taxe.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
     };


     async inserttOrder (db,orderData ) {

        let id_order = await db.knex('orders') .insert(
            { 
                user_id:orderData.user_id, 
                payment_type:orderData.payment_type, 
                payment_type:orderData.payment_type, 
                order_id:orderData.order_id }) .returning('id') .then(([id]) => { return id }).catch(function (err) { console.log(err); });
                orderData.orderDatadetails.forEach(element => { 
                db.knex('order_details') 
                .insert(
                    { order_id :id_order, 
                      Code:element.code, 
                      product_order_name:element.product_order_name,
                      product_order_price:element.product_order_price,
                      product_order_discount:element.product_order_discount,
                      status:element.status,  
                      product_order_quantity:element.product_order_quantity, 
                      product_order_id:element.product_order_id,
                      productphotoid:element.productphotoid, 
                      size: element.size,
                      weight: element.weight,
                      color_extraprice: element.color_extraprice
                      
                    });
                });
    };

     inserttShipping = async shippingdata => {

        await this.deleteshipping(shippingdata.clientid)
        return   await db.knex('shippings')
                                .insert({
                                                userId :shippingdata.clientid,
                                                name:shippingdata.name,
                                                email:shippingdata.email,
                                                address:shippingdata.address,
                                                city:shippingdata.city,
                                                cp:shippingdata.cp,
                                                provaince:shippingdata.provaince,
                                                country:shippingdata.country
                                            }) .catch(function (err) {
                                                console.log(' err ', err);
                                                return err;
                                            }).then(function (cart) {
                                            return   true;
                                     })
                                     .catch(function (err) {
                                         return err;
                                     })
 };


    insertTaxe  = async taxedata => {

        await  db.knex('taxes')
        .insert({
                    name:taxedata.name,
                    value:taxedata.value,
                    provaince:taxedata.provaince
                 }).then(function (taxe) {
                    return  true;
                 }) .catch(function (err) {
                    return false;
                })              
    };
    updateTaxe = async taxedata => {
    
        await db.knex('taxes').where({id: taxedata.id })
        .update({
                    name:taxedata.name,
                    value:taxedata.value,
                    provaince:taxedata.provaince
            }).catch(function (err) {
                console.log(err);
            }); 
    }

     approuveorder = async (orderaprobation) => {

        await db.knex('orders').where({id: orderaprobation.id})
        .update({
            isapptoved: orderaprobation.isapptoved,
            status:orderaprobation.status
            }).then(() => { return true }).catch(function (err) {
                console.log(err);
            }).catch(function (err) {
                console.log(err);
            }); 
     };

     deleteshipping = async clientid => {
        await  db.knex('shippings')
        .where({ userId: clientid })
        .del().then(function (shipping) {
               return  true;
        })
        .catch(function (err) {
            return err;
        })
     };
    deleteTaxe = async id => {
    
        await  db.knex('taxes')
        .where({ id:id })
        .del().then(function (taxe) {
               return  true;
        })
        .catch(function (err) {
            console.log(" error  : ", err )
            return err;
        })
    }


 }
exports.Orderquery = Orderquery;