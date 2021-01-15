const path=require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());
const app= express();
const MongoClient = require('mongoose');

// importing routes
const indexRoutes= require('./routes/index');

//connecion a la base de datos

MongoClient.connect("mongodb+srv://usuario:usuario123@cluster0.8dtle.mongodb.net/ProyectoStudentOwl?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(console.log('DB conectada'))
.catch (err => console.log(err));


//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/',indexRoutes);

//start the server
app.listen(app.get('port'),()=>{
    console.log('Server on port '+app.get('port'));
});