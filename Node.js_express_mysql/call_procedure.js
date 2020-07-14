let mysql = require("mysql");
let connect = require('./conn.js');
let connection = mysql.createConnection(connection);
let sqlproc = "call getuserdata()";
connection.query(sqlproc, (err, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0]);
});
connection.end();
let conn = {
  host: "localhost",
  user: "root",
  password: "Vencutthe1",
  database: "testdb",
};
