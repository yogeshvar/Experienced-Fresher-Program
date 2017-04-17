var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');


var app = express();
var authenticateController = require('./authenticateController.js');
process.env.SECRET_KEY = "mysecretkey";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/api/authenticate',authenticateController.authenticate);


app.listen(3000,function(){
  console.log("Server is listening to port 3000");
});
