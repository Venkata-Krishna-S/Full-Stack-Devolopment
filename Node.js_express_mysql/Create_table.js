var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vencutthe1",
  database: "testdb",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
  var sql = "create table customers(name varchar(20),address varchar(30))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created");
  });
});
