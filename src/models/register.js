const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const registerSchema = Schema({
  
     time:String,
     duration:String,
     aplicationName:String,
     subject_matter: String,
     userName:String,

 });

 module.exports=mongoose.model('Register',registerSchema);