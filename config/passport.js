const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../Models/user');
const config = require('../config/main');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({_id: jwt_payload._id}, (err, user) => {
        if(err){
          return done(err, false);
        }
        if(user){
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }));
  }
  
