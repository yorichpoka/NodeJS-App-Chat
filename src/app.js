var mysql = require('mysql');
var appLog = require('./modules/appLog');
var appJS = require('./modules/appJS');

// -- Create connection -- //
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root", 
//     password: "",
//     database: ""
// });

// con.connect((error, value) => {
//     if (error) throw err;
//     console.log("Connected!");
//     console.log(value);
// });

// -- Execute query in connection -- //
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + result);
//     });
//   });

  // -- Creating databases -- //
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

  // -- Test -- //
  // appLog.log('POKA', 'Test');
  // appJS.log('Ulrich', 'Test');
  // appJS.logStringify({a: 1, b: new Date()});

  appJS.log(
    appJS.appSettings('logFileName')
  );

