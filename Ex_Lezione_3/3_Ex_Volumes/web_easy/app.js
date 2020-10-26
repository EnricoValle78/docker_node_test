var express = require('express');
var app = express();

const publicFolder = `${__dirname}/resources`;

console.log("static folder is server here: "+publicFolder)

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use('/static', express.static(publicFolder));

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);