const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post('/signup', function (req, res) {
  let password = req.body.password;
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(() => {
      res.send({
      status: 'successful',
      Name: req.body.username
    })
  })
})

router.post('/login', function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }).then((data) => {
    if (email === data.email && password === data.password) {
      res.send({
        status: 'successful',
        email: email
      })
    } else {
      res.send({
        status: 'error'
      })
    }
  }).catch((err) => {
    res.send({
      status: err
    })
  })
})

router.put('/addFriend', function (req, res) {
  var friend_email = req.body.friend_email;
  var user_email = req.body.user_email;
  User.findOne({ email: friend_email }).then((data) => {
    if (data !== null) {
      var friend_name = data.username;
      var friend = {
        "friend_name": friend_name,
        "friend_email": friend_email
      }
      var msg = addFriendToFriendList(friend, user_email, friend_email);
      console.log(msg, "msg");
      res.send(msg);
    } else {
      res.send("Your friend is not registered");
    }
  })
})
// req{ user_email, friend_email}
// save the friend_email in the user friends feild.
async function addFriendToFriendList(friend, user_email, friend_email) {
  var msg = '';
  await User.findOne({ email: user_email }).then((data) => {
    var user_id = data._id;
    var check;
    var noOfFriends = data.friends.length;
    if (noOfFriends !== 0) {
      for (var i = 0; i < noOfFriends; i++) {
        if (data.friends[i].friend_email === friend_email) {
          check = false;
          break;
        } else {
          check = true;
        }
      }
    } else {
      check = true;
    }
    if (check) {
      User.findByIdAndUpdate(user_id,
        { $push: { friends: friend } },
        { safe: true, upsert: true },
        function (err, doc) {
          if (err) {
            console.log(err);
          } else {
          }
        }
      );
      msg = 'Successfully added friend to your list';
    } else {
      msg = "Already a friend";
    }
  })
  console.log(msg, ' Inside msg ---', typeof (msg));
  return msg;
}

// req{user_email,friend_email, description, amountPaid} divide the amount in 2.
// udate the paid and borrowed feild of db.
router.post('/addBillWithFriend', function (req, res) {
  var user_email = req.body.user_email;
  var friend_email = req.body.friend_email;
  var amount_paid = req.body.amount_paid;
  var description = req.body.description;
  User.findOne({ email: user_email }).then((data) => {
    var user = data;
    if(user !== null){
    var user_id = user._id;
      User.findOne({ email: friend_email }).then((friend_data) => {
        if(friend_data !== null){
          var friend_id = friend_data._id;
          var paid = {
            to_whom: friend_data.username,
            friend_email: friend_email,
            total_amount: amount_paid,
            lend: amount_paid / 2,
            description: description
          }
          var borrowed = {
            from_whom: user.username,
            friend_email: user_email,
            total_amount: amount_paid,
            lend: amount_paid / 2,
            description: description
          }

          User.findByIdAndUpdate(user_id,
            { $push: { paid: paid } },
            { safe: true, upsert: true },
            function (err, doc) {
              if (err) {
                console.log(err);
              } else {
              }
            }
          );
          User.findByIdAndUpdate(friend_id,
            { $push: { borrowed: borrowed } },
            { safe: true, upsert: true },
            function (err, doc) {
              if (err) {
                console.log(err);
              } else {
              }
            }
          );
          res.send('DB Updated');
        }else{
          res.send('Friend not found');
        }
      })
    }else{
      res.send('user not found');
    }
  })
})


module.exports = router