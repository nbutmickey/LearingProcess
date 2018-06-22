const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema(
  {
    name:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String
    },
    created_at:{
      type:Date,
      required:true,
      default:Date.now()
    },
    avatar_url:String,
    email:String,
    role:String,
    gender:String
  }
);

const User=mongoose.model('User',UserSchema);
module.exports=User;
