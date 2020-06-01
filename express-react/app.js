
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app/build'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/build/index.html');
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
