const express = require('express');
const app = express();
const path = require('path');

// Serve asset files from the '/public' path
app.use('/public', express.static(__dirname + '/public'));
const absolutePath = __dirname + '/views/index.html';
// Define a route to serve the HTML file
app.get('/', function(req, res) {
    res.sendFile(absolutePath)
});
app.get('/json', function(req,res) {
    res.json({"message": "Hello json"})
});

module.exports = app;
