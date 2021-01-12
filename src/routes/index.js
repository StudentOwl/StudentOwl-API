const express= require('express');
const router= express.Router();
const Register=require('../models/register');

router.get('/', (req, res) => {
  res.render('404');
  return res.status(404)
   
  });
  router.get('/:nameMatter',async (req, res, next) => {
    let{nameMatter} = req.params;
    const register = await Register.find({"subject_matter":nameMatter});
    
    console.log(register);
    res.render('index', {register});
 // return res.json(register);
  
  });

router.post('/matter/:subject_matter/nameStudent/:userName',async(req,res,next)=>{

req.body.subject_matter=req.params.subject_matter;
req.body.userName=req.params.userName;
console.log(req.body);
const register = new Register(req.body);
await register.save();
    return res.json(req.body);
  

});


module.exports=router;
