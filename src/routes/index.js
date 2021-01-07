const express= require('express');
const router= express.Router();
const Register=require('../models/register');

router.get('/', (req, res) => {
    res.render('index');
  });
  router.get('/:nameMatter', (req, res, next) => {
    res.render('index');
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
