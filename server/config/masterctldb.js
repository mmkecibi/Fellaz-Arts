"use strict";
const cascadeDelete = require('bookshelf-cascade-delete');


class MasterCtldb{
          static getInstance() {
        return new MasterCtldb();
    }
    constructor() {
      
    }
//**********************************  Client   DB  ******************************************* */    
createClientConnection(knexparam,DATABASE_CLIENT,DATABASE_HOST,DATABASE_USERNAME,DATABASE_PASSWORD,DATABASE_NAME,DATABASE_CHARSET,ORM_NAME){

  this.knex = knexparam({
    client: DATABASE_CLIENT,
    connection: {
      host: DATABASE_HOST,
      user: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
      charset: DATABASE_CHARSET,
      connectionLimit: 15,
      queueLimit: 30,
      acquireTimeout: 1000000
    },
        pool: {
          min: 2,
          max: 7,
          idleTimeoutMillis: 3000,
          afterCreate: function (connection, callback) {
            //  console.log(' >>>>>>>>>>>>>>>>>>>>>>> afterCreate', connection.__knexUid);
              connection.on('error', function (err) {
                  // the handler on one connection is sometime called several times
                  // this.removeAllListeners();
                  // https://github.com/tgriesser/knex/issues/1691
                // console.log(' >>>>>>>>>>>>>>>>>>>>>>> err', this.__knexUid);
              });
              callback(null, connection);
          }
      },
      acquireConnectionTimeout: 3000
  });
  this.Bookshelf = require(ORM_NAME)(this.knex);
  this.Bookshelf.plugin(cascadeDelete);
 
  //Models/tables
  var modeles = require('../models/model.js')(this.Bookshelf );

  this.User  = modeles.User
  this.Role  = modeles.Role
  this.UserRole  = modeles.UserRole
  this.Photo  = modeles.Photo
  this.Eductionexperience  = modeles.Eductionexperience
  this.Citizenship  = modeles.Citizenship
  this.Cart  = modeles.Cart
  this.Availabilitie  = modeles.Availabilitie
  this.Agentservice  = modeles.Agentservice
  this.Address  = modeles.Address
  this.Category  = modeles.Category 
  this.Product  = modeles.Product 
  this.Cart  = modeles.Cart 
  this.Taxe  = modeles.Taxe 
  this.Slider  = modeles.Slider
  this.Shipping = modeles.Shipping
  this.Order = modeles.Order
  this.OrderDetail = modeles.OrderDetail
  this.ProductColorPhoto = modeles.ProductColorPhoto
  this.Calevent = modeles.Calevent   
}
}

//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.MasterCtldb = MasterCtldb;