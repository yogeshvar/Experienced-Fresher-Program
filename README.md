# ForThePeople



This library allows you to quickly and easily use the SendGrid Web API v3 via Node.js.

Version 3.X.X+ of this library provides full support for all SendGrid Web API v3 endpoints, including the new v3 /mail/send.

This library represents the beginning of a new path for SendGrid. We want this library to be community driven and SendGrid led. We need your help to realize this goal. To help make sure we are building the right things in the right order, we ask that you create issues and pull requests or simply upvote or comment on existing issues or pull requests.

Please browse the rest of this README for further detail.

We appreciate your continued support, thank you!

About:

Mysql client module for node.js, written in JavaScript. And send your issues to the correct person using sendgrid

Build Status:

Install

npm install mysql
 || npm install sendgrid

Getting Started with the ForThePeoeple: 

This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.

Here is an example on how to use it:

var mysql      = require('mysql');

connection.connect();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me', //Your username
  password : 'secret', //Your password 
  database : 'my_db' //Your database
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

From this example, you can learn the following:

    Every method you invoke on a connection is queued and executed in sequence.
    Closing the connection is done using end() which makes sure all remaining queries are executed before sending a quit packet to the mysql server.

For Unix/Debian: 
			Step 1 :    $ git clone https://github.com/yogeshvar/ForThePeople.git
			Step 2 :   $ cd ForThePeople/Server
		 	Step 3 :   $ npm install
			Step 4 :   $ npm start


For windows: 
        Step 1 : -> download the zip ForThePeople
        Step 2 : -> cd ForThePeople/Server
        Step 3 : -> npm install
        Step 4 : -> npm start
