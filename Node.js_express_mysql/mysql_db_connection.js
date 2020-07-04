var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vencutthe1",
    database:"testdb"
});
con.connect(function (err) {
    if (err) {
        return console.error('error' + err.message);
    }
    console.log("Connection Successful")
});
con.end(function (err) {
    if (err) {
        return console.error('error' + err.message);
    }
    console.log('Close the database connection');
})