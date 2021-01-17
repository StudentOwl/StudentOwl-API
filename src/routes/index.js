const { request } = require('express');
const express= require('express');
const router= express.Router();
const Register=require('../models/register');

//Carga la pagina principal
router.get('/', (req, res) => {
  res.render('404');
  return res.status(404)
   
  });

 //Peticion get devuelve todo los registro de la materia
  router.get('/API/V1.0/:nameMatter',async (req, res, next) => {
    let{nameMatter} = req.params;
    const register = await Register.find({"subject_matter":nameMatter});
    
    console.log(register);
  //  res.render('index', {register});
 return res.json(register);
  });

  //Peticion get con la materia y el nombre del usuario
  router.get('/API/V1.0/:subject_matter/:userName',async (req, res, next) => {
  
    let{userName} = req.params;
    let{subject_matter} = req.params;
    const register = await Register.find({"userName":userName,"subject_matter":subject_matter});
    
    console.log(register);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  //  res.render('index', {register});
 return res.json(register);
  });

//Metodo POST para recibir un json desde Raw
router.post('/API/V1.0/:subject_matter/:userName',async(req,res,next)=>{
//req.body.subject_matter=req.params.subject_matter;
//req.body.userName=req.params.userName;
 content = req.body;
//console.log(req.body);
const register = new Register();
register.userName=req.params.userName;
register.subject_matter=req.params.subject_matter;
register.register=content;
await register.save()

});


module.exports=router;
