var conn=require("./myConn.js");

module.exports.dbQuery=function (username,password){
    var sql="insert into userlogin1 values('"+username+"','"+password+"')";
    conn.query(sql,function(err,result){
        if(err) throw err;
        res.write("1 record inserted");
        res.end();
    });
}