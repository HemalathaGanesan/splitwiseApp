var express=require("express");
var app= express();
const routes=require('./routers/api')
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin",'*')
    next()
})
// const path=require('path');
app.use('/api',routes);
// app.use('/',express.static(path.join(__dirname,'/src')));
// app.get('/',(req,res)=>res.send('hello world'))
app.listen(4000,()=>console.log('server started....!!!'));
