var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(function(req,res,next ){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,x-Requested-With,Content-Type,Accept");
    next();
});

var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "akhil@08",
  database : "project"
});

connection.connect(function(err){
    if(!err){
        console.log("Database is connected...");
    }
    else{
        console.log("error in connecting database");
    }
});

app.listen(4001,() =>{
    console.log("Server is running on port 4001");
});

app.get('/',function(req,res){
    res.json({msg:"Welcome to node.js Api"});
});


//Route the data
app.post('/register',(req,res) => {
    let data = req.body;
    //to see the data in console log for our convinence
    console.log(data);
    connection.query('insert into registration set ? ',data,function(error, results, fields){  
        if(error){
            res.send({
                "code":400,
                "failed":"Error Ocurred"
            });
        }
        else{   
            res.send({
                "code":200,
                "success":"User registration is complete"
            });
        }
    });
});


app.post('/login',(req,res) => { 
    let email = req.body.email;
    let password = req.body.password;
    console.log(email,password);
    connection.query('select * from registration where email = ? and password = ?',[email,password],function(error,results,fields){
        if(error){
            throw error;
        }
        console.log(results[0]);
        if(error){
            res.send({
                "code":200,
                "success":"successfull login"
            });
        }
        else{
            res.send({
                "code":400,
                "failed":"Can't find the email and password"
            });
        }
    });
});


app.post('/updatepassword',(req,res) => {
    //
});
