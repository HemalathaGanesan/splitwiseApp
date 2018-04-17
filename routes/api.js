const express = require('express');
const router = express.Router();
const User = require('../Models/user');

//req{username,email,password}. return succeful or unsuccessful.
router.post('/signup', function (req, res) {
  User.findOne({ email: req.body.email }).then((data) => {
    if (data === null) {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(() => {
        return User.findOne({ email: req.body.email })
      }).then((data) =>{
        res.send({
          status: 'successful',
          user_data: data
        })
      })
    } else {
      res.send({
        status: 'Unsuccessful'
      })
    }
  });
})

//req{email,password}, return success message with userdata
router.post('/login', function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }).then((data) => {
    if (email === data.email && password === data.password) {
      res.send({
        status: 'successful',
        user_data: data
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

//req{email} return user detail
router.get('/user', function () {
  User.findOne({ email: friend_email }).then((data) => {
    if (data !== null) {
      res.send(data);
    } else {
      res.send("User not found");
    }
  })
})

router.put('/addFriend', function (req, res) {
  var friend_email = req.body.friend_email;
  var user_email = req.body.user_email;
  User.findOne({ email: user_email }).then((data) => {
    var user = {};
    if (data !== null) {
      var friend_name = data.username;
      user = {
        "friend_name": friend_name,
        "friend_email": user_email
      }
    } else {
      res.send("Something Went wrong");
    }
    return user;
  }).then((user) => {
    User.findOne({ email: friend_email }).then((data) => {
      if (data !== null) {
        var friend_name = data.username;
        var friend = {
          "friend_name": friend_name,
          "friend_email": friend_email
        }
        addFriendToFriendList(friend, user, user_email, friend_email).then((msg) => {
          res.send({
            status: 'successful',
            msg: msg
          })
        })
      } else {
        res.send({
          status: 'successful',
          msg: "Your friend is not registered"
        })
      }
    })
  })
})
// req{ user_email, friend_email}
// save the friend_email in the user friends feild.
async function addFriendToFriendList(friend, user, user_email, friend_email) {
  var msg = '';
  var friend_id;
  await User.findOne({ email: friend_email }).then(data => {
    friend_id = data._id
  })
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
      User.findByIdAndUpdate(friend_id,
        { $push: { friends: user } },
        { safe: true, upsert: true },
        function (err, doc) {
          if (err) {
            console.log(err);
          } else {
          }
        });
      msg = 'Successfully added friend to your list';
    } else {
      msg = "Already a friend";
    }
  })
  return msg;
}

//req{email} return friend list
router.get('/friends/:email', function (req, res) {
  var user_email = req.params.email
  User.findOne({ email: user_email }).then((data) => {
    if (data !== null) {
      var count = 0;
      Promise.all(data.friends.map((frnd) => {
        return splitBillWithFriend(user_email, frnd.friend_email).then((bill) => {
          frnd.total = bill.total;
          frnd.paid = bill.paid;
          frnd.borrowed = bill.borrowed;
          return frnd;
        })
      }))
      .then( result => {
         res.send(result);
      })
      
    } else {
      res.send("User not found");
    }
  })
})

//overall bill between user and specified friend.
function splitBillWithFriend(user_email, friend_email) {
  return User.findOne({ email: user_email }).then((data) => {
    var lend = 0;
    var borrowed = 0;
    data.paid.forEach(function (element) {
      if (element.friend_email === friend_email) {
        lend = lend + element.lend;
      }
    })
    data.borrowed.forEach(function (element) {
      if (element.friend_email === friend_email) {
        borrowed = borrowed + element.lend;
      }
    })
    var bill = {
      total: lend - borrowed,
      paid: lend,
      borrowed: borrowed
    }
    return bill;
  })
}

// req{user_email,friend_email, description, amountPaid} divide the amount in 2.
// udate the paid and borrowed feild of db.
router.post('/addBillWithFriend', function (req, res) {
  var user_email = req.body.user_email;
  var friend_email = req.body.friend_email;
  var amount_paid = req.body.amount_paid;
  var description = req.body.description;
  var split_between = req.body.split_between;
  var paid_by = req.body.paid_by;
  //console.log(split(user_email,friend_email,amount_paid,description));
  split(user_email,friend_email,amount_paid,description).then((values)=>{
    if (typeof(values)=== "object"){
      if(paid_by===user_email){
        values.paid.lend = values.paid.total_amount / split_between.length;
        values.borrowed.lend = values.borrowed.total_amount / split_between.length;
        console.log(values.paid.total_amount," amount ", split_between.length, typeof(split_between))
        findByIdAndUpdateIt(values.user_id,"paid",values.paid);
        findByIdAndUpdateIt(values.friend_id,"borrowed",values.borrowed);
        res.send({
          status: "Successful"
        });
      }else if(paid_by === friend_email){
        values.paid.lend = values.paid.total_amount / split_between.length;
        values.borrowed.lend = values.borrowed.total_amount / split_between.length;
        var payee_name = values.paid.to_whom;
        var recipent_name = values.borrowed.from_whom;
        values.paid.to_whom = recipent_name;
        values.paid.friend_email = user_email;
        values.borrowed.from_whom = payee_name;
        values.borrowed.friend_email = friend_email;
        findByIdAndUpdateIt(values.friend_id,"paid",values.paid);
        findByIdAndUpdateIt(values.user_id,"borrowed",values.borrowed);
        res.send({
          status: "Successful"
        });
      } else{
        res.send('Something went wrong');
      }
    }else{
      res.send(values);
    }
  })
})

function split(user_email,friend_email,amount_paid,description){
  return User.findOne({ email: user_email }).then((data) => {
    var user = data;
    if (user !== null) {
      var user_id = user._id;
      return User.findOne({ email: friend_email }).then((friend_data) => {
        if (friend_data !== null) {
          var friend_id = friend_data._id;
          var paid = {
            to_whom: friend_data.username,
            friend_email: friend_email,
            total_amount: amount_paid,
            description: description
          }
          var borrowed = {
            from_whom: user.username,
            friend_email: user_email,
            total_amount: amount_paid,
            description: description
          }

          var obj = {
            user_id : user_id,
            friend_id : friend_id,
            paid : paid,
            borrowed : borrowed
          }
          return obj;      
        } else {
          return('Friend not found');
        }
      })
    } else {
      return('user not found');
    }
  })
}

function findByIdAndUpdateIt(id, key, value){
  var feild = key;
  User.findByIdAndUpdate(id,
    { $push: { [feild]: [value] } },
    { safe: true, upsert: true },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
}

//overall bill of a user
router.get('/userBill/:email', function (req, res) {
  User.findOne({ email: req.params.email }).then((data) => {
    var lend = 0;
    var borrowed = 0;
    data.paid.forEach(function (element) {
      lend = lend + element.lend;
    })
    data.borrowed.forEach(function (element) {
      borrowed = borrowed + element.lend;
    })
    var bill = {
      total: lend - borrowed,
      paid: lend,
      borrowed: borrowed
    }
    res.send(bill);
  })
})

//req{email} return all expense for that user

router.get('/allExpenses/:email', function (req, res) {
  User.findOne({ email: req.params.email }).then((data) => {
    if (data != null) {
      var expense_list = [...data.paid, ...data.borrowed];
      res.send(expense_list);
    }
  })
})

router.get('/allExpenses/friends/:user_email/:friend_email', function (req, res) {
  User.findOne({ email: req.params.user_email }).then((data) => {
    if (data != null) {
      
      var expense_list = [...data.paid, ...data.borrowed];
      var friend_expense = expense_list.filter(result => {
        if(result.friend_email === req.params.friend_email){
          return result;
        }
      })
      res.send(friend_expense);
    }
  })
})

module.exports = router