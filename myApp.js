const express = require('express');
const app = express();
const path = require('path');

// Serve asset files from the '/public' path
app.use(express.static(__dirname + 'public'));
const absolutePath = __dirname + '/views/index.html';
// Define a route to serve the HTML file
app.get('/', function(req, res) {
    res.sendFile('views/index.html', {root: __dirname })
});
