var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "itesm2022",
  database: "testdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM Customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
