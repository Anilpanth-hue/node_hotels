const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const http = require('http');
const server = http.createServer(app);

server.keepAliveTimeout = 120000; // 120 seconds
server.headersTimeout = 120000; // 120 seconds

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000; 



app.get('/', function (req, res) {
  res.send('Hello World, How are you guys.....??, SO today we have a variety of dishes')
})

// Import the router files
const personRoutes = require('./routes/personRoutes')

//Use routers
app.use('/person', personRoutes);

//Import the menuItem router files
const menuRoutes = require('./routes/menuRoutes')

//using routers for menuItem
app.use('/MenuItem', menuRoutes);



// Most important for hosting 3000 server 
server.listen(PORT, '0.0.0.0', ()=>{
    console.log('listning on port 3000');
    
});


 

























/*

const notes = require('./notes.js');

console.log('server file is available');

// Load the full build.
var _ = require('lodash');

console.log('Server file is available');
var age = notes.age;
var result = notes.addNumbers(age+10, 18);
console.log('result is ' + result);
console.log(age);

var data = ["person","person",1,2,1,2,'name','age','2']
var filter = _.uniq(data); // only gives unique valkue and not repeat the values
console.log(filter);
*/

