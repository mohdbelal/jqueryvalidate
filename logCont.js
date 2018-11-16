var express = require ('express');
var mysql = require ('mysql');
var fs = require("fs");
var url=require('url');
var dao=require('./logDao.js');
var app = express();
var con = require('./myConn.js');

app.get("/",function(req,res){
    fs.readFile("login.html",function(err,data){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(data);
    res.end();    
    });
});

app.get("/verify",function (req,res){
var path=url.parse(req.url,true).pathname;
if(path=="/" || path=="/favicon.ico")
{
    res.end();
}
else{
    var qs=url.parse(req.url,true).query;
    var username = qs.username;
    var password = qs.password;
    dao.dbQuery(username,password);
    res.end();
}
})
app.listen(7001);
console.log("Listen service");