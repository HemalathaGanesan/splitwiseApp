const express=require('express');
const router=express.Router();
const User = require('../Models/user');

router.post('/signup',function(req,res){
    console.log(req.body.name,req.body.email)
    User.create({
        username : req.body.name,
        email : req.body.email,
        password : req.body.password
    }).then(() => {
        res.send({
            status:'successful',
            Name:req.body.name
        })
    })    
})

router.post('/login',function(req,res){
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({ email:email }).then((data)=>{
        if(email === data.email && password === data.password){
            res.send({
                status:'successful',
                email:email
            })
        }else {
            res.send({
                status:'error'
            })
        }
    }).catch((err)=>{
        res.send({
            status:err
        })
    })
})

module.exports=router