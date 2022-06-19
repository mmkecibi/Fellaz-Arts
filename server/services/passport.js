const passport = require('passport');
const LocalStrategy = require('passport-local');
const userQuery = require('../models/users/q');
const userq = userQuery.Userquery.getInstance();

// Only For Session Authentication !
passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser( function(id, done) {
   userq.getUser(id).then(function (user) { 
     done(null, user)
  })
})

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},  (email, password, done) => {

userq.getUserByEmail(email).then(function (user) { 
   if (!user) {return done(null, false) }

   userq.comparePassword(password,user.password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) {return done(null, false) }
        return done(null, user) 
    })
  })
}))