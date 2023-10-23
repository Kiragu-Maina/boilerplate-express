require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');

// Serve asset files from the '/public' path
app.use('/public', express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  console.log(req.method +' '+ req.path +' '+'-'+' '+ req.ip);
  next();
});
const absolutePath = __dirname + '/views/index.html';
// Define a route to serve the HTML file
app.get('/', function(req, res) {
    res.sendFile(absolutePath)
});
app.get('/json', function(req,res) {
    if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({"message": "HELLO JSON"})
    }
    else {
        res.json({"message": "Hello json"})
    }
});

module.exports = app;
