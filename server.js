const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const routes=require('./routers/api')
app.use('/api',routes);

mongoose.connect('mongodb://localhost/splitxpenz');
mongoose.connection.once('open',function(){
    console.log("connection success");
}).on('error',function(err){
    console.log('Connection Error',err);
});

var port = process.env.PORT || 8081;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'))

app.listen(port, function (err) {
  if (err) {
    console.log("error ", err)
  } else {
    console.log('listening on port ',port)
  }
})
