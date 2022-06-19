const express = require('express')
const app = express()
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const keys = require('../keys');
const passport = require('passport');
const usersRoutes = require('./user');
const apiRoutes = require('./api');
const productRoutes = require('./product');
const cartRoutes = require('./cart');
const orderRoutes = require('./order');
require("../services/passport");
var config = {
  user: 'root',
  password: 'mous2058',
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
  database: 'ecombusiness',
  options: {
      encrypt: true // Use this if you're on Windows Azure
  }
}
app.use(bodyParser.json());
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mous2058',
    database: 'ecombusiness',
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'sid',
            expires: 'expires',
            data: 'data'
        }
    }
};
var sessionStore = new MySQLStore(options);
const sess =
  { 
    store: sessionStore,
    name: 'promo-secure-session',
    secret: keys.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
  }
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use('', apiRoutes);
app.use('/users', usersRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
module.exports = {
  path: '/api/v1',
  handler: app
}