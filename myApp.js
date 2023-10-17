console.log("Hello World");
let express = require('express');
let app = express();
absolutePath = __dirname + '/views/index.html'
app.get('/', function(req, res){
 res.send(absolutePath);
});



































 module.exports = app;
