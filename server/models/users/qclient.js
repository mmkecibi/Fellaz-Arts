"use strict";
const utilsf = require( "../utils" );

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const moment = require('moment');
const modelUtils = utilsf.modelUtils.getInstance();

const dbclient = require('../../db/client');
const cx = dbclient.Clientdb.getInstance();

class Usercltquery {
    static getInstance() {
        return new Usercltquery();
    }
    constructor() {
        this.pool = null;
    }

    getClientById = async userId => {

 /*     this.sqlQueries = await modelUtils.loadSqlQueries( "users" );
       // get a connection to SQL Server
       const cnx = await cx.getConnection();

       // create a new request
        const request = await cnx.request();

       // configure sql query parameters

       request.input( "userId", sql.VarChar( 50 ), userId );
       // return the executed query

       return request.query( this.sqlQueries.getUserInfos);  */
   };

     inserttUserClient = async registerData => {

  /*      this.sqlQueries = await modelUtils.loadSqlQueries( "users" );
         // get a connection to SQL Server
         const cnx = await cx.getConnection();
  
         // create a new request
          const request = await cnx.request();

        let hashpassword =''
        const salt = await bcrypt.genSalt(10);
        registerData.password = await bcrypt.hash(registerData.password, salt);

        // User Info
                request.input( "lastname", sql.VarChar( 58 ), registerData.lastname );
                request.input( "firstname", sql.VarChar( 58 ), registerData.firstname );
                request.input( "username", sql.VarChar( 58 ), registerData.username );
                request.input( "password", sql.VarChar( 158 ), registerData.password );
                request.input( "bio", sql.VarChar( 58 ), registerData.bio );
                request.input( "isactive", sql.VarChar( 58 ), 1 );
                request.input( "age", sql.VarChar( 58 ), registerData.age );
                request.input( "phone", sql.VarChar( 58 ), registerData.phone );
                request.input( "email", sql.VarChar( 58 ), registerData.email );
                request.input( "gender", sql.VarChar( 58 ), registerData.gender );
                request.input( "transportation", sql.VarChar( 58 ), registerData.transportation );
                request.input( "CreatedBy", sql.VarChar( 58 ), registerData.username );
        //Address Info
                request.input( "street", sql.VarChar( 58 ), registerData.addressLineOne );
                request.input( "city", sql.VarChar( 58 ), registerData.city );
                request.input( "provaince", sql.VarChar( 58 ), registerData.state );
                request.input( "country", sql.VarChar( 158 ), registerData.country );
                request.input( "cp", sql.VarChar( 58 ), registerData.postcode );
        //Citizenships Info
               request.input( "dob", sql.DateTime, registerData.dob );
               request.input( "citizenshipca", sql.Bit, registerData.citizenshipca );
               request.input( "languagespoken", sql.VarChar( 58 ), registerData.languagespoken );
               request.input( "otherlanguage", sql.VarChar( 158 ), registerData.otherlanguage );
               request.input( "countryofborn", sql.VarChar( 58 ), registerData.countryofborn );
               request.input( "citizenexpiredate", sql.DateTime, registerData.citizenexpiredate );

        return   request.query( this.sqlQueries.insertUserInfor);   */
     };


     updateclientinfo = async (activeStep,clientData) => {

/*     let dicactiveStep = []
      dicactiveStep['PersonalInformation'] = 'updateUserInfor'
      dicactiveStep['Address'] = 'updateUserAddress'
      dicactiveStep ['Citizenship'] = 'updateUserCitizenShips'
      dicactiveStep['Transportation'] = 'Educationandexperience'
 
       this.sqlQueries = await modelUtils.loadSqlQueries( "users" );
        // get a connection to SQL Server
        const cnx = await cx.getConnection();
         // create a new request
         const request = await cnx.request();
        // User Info
               request.input( "id", sql.VarChar( 58 ), clientData.id );
               request.input( "lastname", sql.VarChar( 58 ), clientData.lastname );
               request.input( "firstname", sql.VarChar( 58 ), clientData.firstname );
               request.input( "username", sql.VarChar( 58 ), clientData.username );
               request.input( "age", sql.VarChar( 58 ), clientData.age );
               request.input( "phone", sql.VarChar( 58 ), clientData.phone );
               request.input( "email", sql.VarChar( 58 ), clientData.email );
               request.input( "gender", sql.VarChar( 58 ), clientData.gender );
               request.input( "ModifiedBy", sql.VarChar( 58 ), clientData.username );
       //Address Info
              request.input( "address_id", sql.VarChar( 58 ), clientData.address_id );
               request.input( "street", sql.VarChar( 58 ), clientData.addressLineOne );
               request.input( "city", sql.VarChar( 58 ), clientData.city );
               request.input( "provaince", sql.VarChar( 58 ), clientData.state );
               request.input( "country", sql.VarChar( 158 ), clientData.country );
               request.input( "cp", sql.VarChar( 58 ), clientData.postcode );

       //Citizenships Info
             request.input( "citizenships_id", sql.VarChar( 58 ), clientData.citizenships_id);
              request.input( "dob", sql.DateTime, clientData.dob );
              request.input( "citizenshipca", sql.Bit, clientData.citizenshipca );
              request.input( "languagespoken", sql.VarChar( 58 ), clientData.languagespoken );
              request.input( "otherlanguage", sql.VarChar( 158 ), clientData.otherlanguage );
              request.input( "countryofborn", sql.VarChar( 58 ), clientData.countryofborn );
              request.input( "citizenexpiredate", sql.VarChar( 58 ), clientData.citizenexpiredate );
       return   request.query( this.sqlQueries[ dicactiveStep[activeStep]]); */
    };
 }
exports.Usercltquery = Usercltquery;