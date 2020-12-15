const mysql = require('mysql');

const con = mysql.createConnection({
  host: "ec2-18-222-211-247.us-east-2.compute.amazonaws.com",
  user: "user",
  password: "password",
  database: "productDescriptions"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports.con = con;
