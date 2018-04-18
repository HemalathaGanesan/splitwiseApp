const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport');

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize());

const routes=require('./routers/api')
app.use('/api',routes);

require('./config/passport')(passport);

mongoose.connect('mongodb://localhost/splitxpenz');
mongoose.connection.once('open',function(){
    console.log("connection success");
}).on('error',function(err){
    console.log('Connection Error',err);
});

var port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'))
app.use('/api/groups', require('./routes/groupApi'))

app.listen(port, function (err) {
  if (err) {
    console.log("error ", err)
  } else {
    console.log('listening on port ',port)
  }
})
