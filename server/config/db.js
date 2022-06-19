'use strict'
const knex = require('knex')
const masterClientdb = require('./masterctldb');
const env = require('./env');
const mmasterCtldb = masterClientdb.MasterCtldb.getInstance() ;
mmasterCtldb.createClientConnection(knex,env.DATABASE_CLIENT,env.DATABASE_HOST,env.DATABASE_USERNAME,env.DATABASE_PASSWORD,env.DATABASE_NAME,env.DATABASE_CHARSET,env.ORM_NAME)

module.exports = mmasterCtldb;