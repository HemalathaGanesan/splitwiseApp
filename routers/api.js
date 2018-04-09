var express=require('express')
const router=express.Router();
const dash=require('../dashboard.json')
const expense=require('../expenses.json')
const group=require('../groups.json')
const friend=require('../friends.json')

router.get('/dash',function(req,res){
    res.send(dash)    
})

router.get('/expenses',(req,res)=>{
    res.send(expense)
})  

router.get('/group',(req,res)=>{
    res.send(group)
}) 

router.get('/friend',(req,res)=>{
    res.send(friend)
})

module.exports=router;
