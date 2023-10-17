const express = require('express');
const app = express();
const path = require('path');

const absolutePath = path.join(__dirname, 'views', 'index.html');
const absolutePublic = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(absolutePublic));

// Define a route to serve the HTML file
app.get('/', function(req, res) {
  res.sendFile(absolutePath, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
});
