const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const registerSchema = Schema({
  
     
     subject_matter: String,
     userName:String,
     register:[
    
     ]

 });

 module.exports=mongoose.model('Register',registerSchema);