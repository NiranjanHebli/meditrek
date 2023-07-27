const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is require"],
  },
  email:{
    type:String,
    require:[true,"email is require"],
  },
  password:{
    type:String,
    required:[true,"password is required"]
  },

});



const userModel=mongoose.model('users',userSchema);
module.exports=userModel;