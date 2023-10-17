console.log("Hello World");
let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'
app.get('/', function(req, res){
 res.sendFile(absolutePath);
});
absolutepublic = __dirname + '/public'

app.use(express.static(absolutepublic))



































 module.exports = app;
