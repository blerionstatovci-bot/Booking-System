const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 fullName:{
type: String,
required: true
 },
 age:{
    type:Number,
    required:true
 },
 email:{
    type:String,
    unique:true,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 location:{
      type:String,
 },
 Image:{
    type:String
 }

}, {timestamps:true});

const User = mongoose.model('User', UserSchema);
   module.exports = User;
