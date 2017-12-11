var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

//中间件
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.sendStatus(200); /让options请求快速返回/
  }
  else {
  	next();
  }
});
	
//query
app.get("/user",function(req,res){
	console.log(req.query);
	res.send(req.query);
});

//update
app.post("/user",function(req,res){
	console.log(req.body);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(req.body);
});

//add
app.put("/user",function(req,res){
	console.log(req.body);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(req.body);
});

//delete
app.delete("/user",function(req,res){
	console.log(req.body);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(req.body);
});

app.listen(8088,"localhost");