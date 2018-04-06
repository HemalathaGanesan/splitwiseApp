const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:Number,
    friend:[],
    paid:[{
        to_whom:Number,
		total_amount:Number,
		description:String
    }]
})

const Users = mongoose.model('users',UserSchema);
module.exports = Users;