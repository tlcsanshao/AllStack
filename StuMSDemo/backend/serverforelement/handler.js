var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');

var mysql = require('./mysql.js');
var insertUpdateDelete = mysql.insertUpdateDelete;
var query = mysql.query;

var app = express();
app.use(bodyParser.json());

app.post("/login",function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	console.log(username,password);
	doLogin(username,password,res);
});

app.get("/getStudentInfoList",function(req,res){
	doGetStudentInfoList(res);
});

app.post("/addStudentInfo",function(req,res){
	doAddStudentInfo(req.body,res);
});

app.get("/deleteStudentInfo",function(req,res){
	doDeleteStudentInfo(req.query,res);
});

app.post("/updateStudentInfo",function(req,res){
	console.log("aaaaaaa");
	doUpdateStudentInfo(req.body,res);
});



function doLogin(username,password,res){
	var sql = "select * from userInfo";
	var params = [];
	query(sql,params).then(function(data){
		if(data == null){
			res.send({"loginFlag":"failed"});
		}else{
			for(let i=0;i<data.length;i++){
				if(username == data[i].username && password== data[i].password){
					res.send({"loginFlag":"success"});
					return;
				}
			}
			res.send({"loginFlag":"failed"});
		}
	});
}



function doAddStudentInfo(item,res){
	var sql = "insert into studentInfo (name,sex,age,cardno) values(?,?,?,?)";
	var params = [item.name,item.sex,item.age,item.cardno];
	insertUpdateDelete(sql,params).then(function(data){
		if(data == true){
			res.send({"addFlag":"success"});
		}else{
			res.send({"addFlag":"failed"});
		}
	});
}

function doGetStudentInfoList(res){
	var sql = "select * from studentInfo";
	var params = [];
	query(sql,params).then(function(data){
		if(data == null){
			res.send(null);
		}else{
			res.send(data);
		}
	});

}

function doDeleteStudentInfo(item,res){
	var sql = "delete from studentInfo where id=?";
	var params = [item.id];
	insertUpdateDelete(sql,params).then(function(data){
		if(data == true){
			doGetStudentInfoList(res);
		}else{
			res.send({"deleteFlag":"failed"});
		}
	});
}


function doUpdateStudentInfo(item,res){
	var sql = "update studentInfo set name=?,sex=?,age=?,cardno=? where id=?";
	var params = [item.name,item.sex,item.age,item.cardno,item.id];
	console.log(params);
	insertUpdateDelete(sql,params).then(function(data){
		console.log(data);
		if(data == true){
			res.send({"updateFlag":"success"});
		}else{
			res.send({"updateFlag":"failed"});
		}
	});
}




app.listen(8081,"localhost");