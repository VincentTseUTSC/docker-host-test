var express = require('express')
var app = express();

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

app.get('/', function (req, res, next) {
    res.end("hello world!");
});

var http = require("http");
http.createServer(app).listen(80, function(){
    console.log('HTTP on port 80');
});

process.on('SIGTERM', function() {
  console.log('\ncaught SIGTERM, stopping gracefully');
  process.exit(1);
});