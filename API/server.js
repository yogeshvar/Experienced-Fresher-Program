var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var myRoutes = require('./myRoutes.js')
var app = express();
var config = require('./config.js');
var fs = require("fs");
var authenticateController = require('./authenticateController.js');
process.env.SECRET_KEY = "mysecretkey";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/api/authenticate',authenticateController.authenticate);

app.get('*', function (req,res){
	res.send('Error: 404, Page not found<br>For your request');
});
app.post('/api/storeemail',function(req,res)
{
  console.log('1');
   var useremail = req.params.usermail;
  createTokenForEmail(useremail);
});
function createTokenForEmail(useremail)
{
  var userData = {};
  var userDataInfo = {};
  var response = {};
  userData.email = useremail;
  var token = jwt.sign(userData,process.env.SECRET_KEY,
  {
    expiresIn: 4000
  });
  userData.token = token;
try{
  fs.appendFile(config.storeDataInfo,JSON.stringify(userData),function(err)
  {
    if(err) throw err;
    response.responseMessage = 'SUCCESS';
    response.responseStatus  = 200;
//    res.send(response);
  });
}catch(err)
{
  console.log('Server error:', err);
  response.responseMessage = 'Internal server error';
  response.responseStatus  = 200;
//  res.send(response);
}
console.log(token);

}
app.get('/api/storenumber/:phonenumber',function(req,res)
{
  var no = req.params.phonenumber;
  var pattern = new RegExp("^[0-9]{10}$");
  if(pattern.test(no)==0)
  {
    console.log('phone no is incorrect');
  }
  else{
    console.log('phone no is correct');
//    readFileFunction(no);
    createTokenForMobile(no);
  }
});

function createTokenForMobile(no)
{
  var userData = {};
  var userDataInfo = {};
  var response = {};
  userData.number = no;
  var token = jwt.sign(userData,process.env.SECRET_KEY,
  {
    expiresIn: 4000
  });
  userData.token = token;
try{
  fs.appendFile(config.storeDataInfo,JSON.stringify(userData),function(err)
  {
    if(err) throw err;
    response.responseMessage = 'SUCCESS';
    response.responseStatus  = 200;
//    res.send(response);
  });
}catch(err)
{
  console.log('Server error:', err);
  response.responseMessage = 'Internal server error';
  response.responseStatus  = 200;
//  res.send(response);
}
console.log(token);

}
app.listen(3000,function(){
  console.log("Server is listening to port 3000");
});
