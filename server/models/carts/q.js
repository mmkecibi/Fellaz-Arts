"use strict";
const db = require('../../config/db.js'); 

const utilsf = require( "../utils" );

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const moment = require('moment');
const modelUtils = utilsf.modelUtils.getInstance();



class Cartquery {
    static getInstance() {
        return new Cartquery();
    }
    constructor() {
        this.pool = null;
    }
    
    inserttCart = async cartdata => {
console.log('insertcart cartdata  ', cartdata)
            await this.deletecart(cartdata[0].clientid)
         return   cartdata.forEach(cart => {
              db.knex('cart')
                                    .insert({
                                                    user_id :cart.clientid,
                                                    productId:cart.productId,
                                                    productphotoid:cart.productphotoid,
                                                    productName:cart.productName,
                                                    productPrice:cart.productPrice,
                                                    productDiscount:cart.productDiscount,
                                                    productQuantity:cart.productQuantity,
                                                    color_extraprice:cart.color_extraprice,
                                                    size: cart.size, 
                                                    weight: cart.weight,  
                                                }) .catch(function (err) {
                                                    console.log(' err ', err);
                                                    return err;
                                                })  
                                            }).then(function (cart) {
                                                return   true;
                                         })
                                         .catch(function (err) {
                                             return err;
                                         })
     };
     deletecart = async clientid => {
        await  db.knex('cart')
        .where({ user_id: clientid })
        .del().then(function (cart) {
               return  true;
        })
        .catch(function (err) {
            return err;
        })
     };

     deletebyproductid = async (clientid,productid)=> {
        await  db.knex('cart').where({user_id: clientid})
        .where({ productId: productid })
        .del().then(function (cart) {
               return  true;
        })
        .catch(function (err) {
            return err;
        })
     };
     updatebyproductid = async (clientid,productid,quantity) => {
        await db.knex('cart').where({user_id: clientid}).where({productId: productid})
        .update({
            productQuantity: quantity,
            }).then(() => { return true }).catch(function (err) {
                console.log(err);
            }).catch(function (err) {
                console.log(err);
            }); 
     };
    getcartItembyproductid = async (clientid,productid) => {
        return await  db.Cart.forge({user_id: clientid,productId: productid})
        .fetch()
        .then(function (cart) {
            if (cart) {
                return  cart.toJSON();
            }
            return  null;
        })
        .catch(function (err) {
            return err;
        })
     };

    getclientcart = async clientid => {
        var params = {clientid};
       let qry = " SELECT c.productName,c.productPrice,c.productDiscount,c.productId,c.productphotoid,c.user_id clientid,p.description productDetail,c.productQuantity,c.weight,c.size,c.color_extraprice  "
       qry += " FROM ecombusiness.cart c join products p on c.productId = p.id where user_id = :clientid "

       return  await   db.knex.raw(qry,params).then(function (carts) {
                   if (carts) {
                       return  carts[0];
                   }
                   })
                   .catch(function (err) {
                       return err;
                   })
     };

     getclientcartwithphotos = async clientid => {

        var params = {clientid};
       let qry = " SELECT c.productName,c.productPrice,pp.photo productPhoto,pp.color,pp.name colorname,c.productDiscount,c.productId,c.productphotoid,c.user_id,p.description productDetail,c.productQuantity,c.weight,c.size,c.color_extraprice  "
       qry += " FROM ecombusiness.cart c join products p on c.productId = p.id " 
       qry += " left  join productcolorphotos pp on c.productphotoid = pp.id " 
       qry += " where user_id = :clientid "
       return  await   db.knex.raw(qry,params).then(function (carts) {
                   if (carts) {
                       return  carts[0];
                   }
                   })
                   .catch(function (err) {
                       return err;
                   })
    }
 }
exports.Cartquery = Cartquery;