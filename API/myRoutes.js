/*var fs = require("fs");
var myRoutes = {};
var config = {};
config.storeData = './storeData.json'
var storeFile = config.storeData;
myRoutes.postdata = function(req,res)
{
  var phonenumber = {};
  var userAvail = "FALSE"
    phonenumber.number = req.params.phonenumber;
    console.log(JSON.stringify(phonenumber));
    fs.appendFile(storeFile,JSON.stringify(phonenumber), function(err)
  {
    if (err) throw err;
    console.log('Stored');
  });
}
*/
