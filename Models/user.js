const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: Number,
  friends: [],
  paid: [],
  borrowed: []
})

//save users hashed password;
UserSchema.pre('save', function(next){
  var user = this;
  if(this.isModified('password') || this.isNew){
    bcrypt.genSalt(10, function(err,salt){
      if(err){
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err,hash){
        if(err){
          return next(err);
        }
        user.password = hash;
        next(); 
      });
    });
  } else {
    return next();
  }
});

//method to compare password;
UserSchema.methods.comparePassword = function(pw,cb){
  bcrypt.compare(pw,this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null,isMatch);
  });
};

const Users = mongoose.model('users', UserSchema);
module.exports = Users;