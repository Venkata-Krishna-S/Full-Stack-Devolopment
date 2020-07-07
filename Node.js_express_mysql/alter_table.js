var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Vencutthe1",
    database:"testdb"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    var sql ="alter table customers add column id int auto_increment primary key";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table altered");
    });
});