const express = require('express');
const app = express();
const path = require('path');

// Serve asset files from the '/public' path
app.use('/public', express.static(path.join(__dirname, '/public')));

// Define a route to serve the HTML file
app.get('/', function(req, res) {
  const absolutePath = path.join(__dirname, '/views/index.html');
  res.sendFile(absolutePath, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
});
