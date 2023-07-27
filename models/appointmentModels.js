const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is require"],
  },
  email:{
    type:String,
    require:[true,"email is require"],
  },
  phoneno:{
    type:String,
    required:[true,"phone no. is required"]
  },
  reason:{
    type:String,
    required:[true,"reason is required"]
  },
  docname:{
    type:String,
    required:[true,"docters name  is required"]
  },
  age:{
    type:String,
    required:[true,"age is required"]
  },
  date:{
    type:String,
    required:[true,"date is required"]
  },
  time:{
    type:String,
    required:[true,"time is required"]
  },

});



const appointmentModel=mongoose.model('appointments',appointmentSchema);
module.exports=appointmentModel;