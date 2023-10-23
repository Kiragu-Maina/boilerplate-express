require('dotenv').config()
const bodyParser =   require('body-parser')
const express = require('express');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
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

app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();  
},function(req, res){
      res.json({time: req.time})
    });

app.get('/:word/echo', function(req, res){
  res.json({echo: req.params.word})
});

app.route('/name').get(function(req, res){
  const { first, last } = req.query;
  const full_name = `${first} ${last}`;
  res.json({ name: full_name })
}).post(function(req, res){
  const { first, last } = req.body;
  const full_name = `${first} ${last}`;
  res.json({ name: full_name })
});


module.exports = app;
