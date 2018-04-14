const express = require('express');
const router = express.Router();
const Groups = require('../Models/groups');
const User = require('../Models/user');

router.post('/group', function (req, res) {
  Groups.create({
    group_name: req.body.group_name,
    members: req.body.members
  }).then(() => {
    res.send({
      status: 'successful'
    })
  })
})

router.get('/group/:userId',function(req,res){
  User.findOne({})
})



module.exports = router