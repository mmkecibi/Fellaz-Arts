'use strict';
const env = {
  PORT: process.env.PORT || 8080,
  DATABASE_NAME: process.env.DATABASE_NAME || 'ecombusiness',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',//'35.238.44.21',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',//'mkecibi',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'mous2058',//'Canada2058!!!',
  DATABASE_PORT: process.env.DATABASE_PORT || 3600,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  DATABASE_CHARSET: 'utf8',
  DATABASE_CLIENT:'mysql',
  ORM_NAME:'bookshelf',

  NODE_ENV: process.env.NODE_ENV || 'development',


  CLOUD_NAME: 'hoo3s2ymm',
  API_KEY: '176134627746793',
  API_SERCRET: 'bui607RJ96p4_fFm1My1LQNn_Fg',
  CLOUDINARY_URL: 'cloudinary://176134627746793:bui607RJ96p4_fFm1My1LQNn_Fg@hoo3s2ymm'
};

module.exports = env;