var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'sms'
});

//Promise
function insertUpdateDelete(sql,params){
	var p = new Promise(function(resolve, reject){
		pool.query(sql,params,function(err ,rows ,fields){
			if(err){
				resolve(false);
			}else{
				resolve(true);
			}
		});
	});
	return p;
}


function query(sql,params){
	var p = new Promise(function(resolve, reject){
		pool.query(sql,params,function(err ,result){
			if(err){
				resolve(null);
			}else{
				resolve(result);
			}
		});
	});
	return p;
}





module.exports.insertUpdateDelete=insertUpdateDelete;
module.exports.query = query;




