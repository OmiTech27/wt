//Write a Program to Create a connection with mysql
//Write a Program to create database ‚ ”rainaDB”.

//npm install mysql

var mysql = require("mysql");
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "root"
});
con.connect(function(err)
{
console.log("Connected Successfully!");
});

//////
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password"
});
con.connect(function(err) {
//if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE RainaDB", function (err, result) {
//if (err) throw err;
console.log("Database created Successfully !!!!!");
});
});

.\///////


//Write a Program to create table “Student”
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "rainadb"
});
con.connect(function(err) {
//if (err) throw err;
console.log("Connected!");
var sql = "CREATE TABLE student (name VARCHAR(20), address VARCHAR(255))";
con.query(sql, function (err, result) {
// if (err) throw err;
console.log("Student Table created successfully ..... ");
});
});

//Write a Program to Insert record on „student‟ table.
con.connect(function(err) {
//if (err) throw err;
console.log("Connected!");
var sql = "CREATE TABLE student (name VARCHAR(20), address VARCHAR(255))";
con.query(sql, function (err, result) {
// if (err) throw err;
console.log("Student Table created successfully ..... ");
});
});
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "rainadb"
});
con.connect(function(err) {
//if (err) throw err;
console.log("Connected!");
var sql = "INSERT INTO student (name, address) VALUES ('Reeta Singh', 'Bhandup-west')";
con.query(sql, function (err, result) {
// if (err) throw err;
console.log("1 record inserted");
});
});

/////////////////////

//Write a Program to Insert multiple record on „student‟ table.

var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "rainadb"
});
con.connect(function(err) {
//if (err) throw err;
console.log("Connected!");
var sql = "INSERT INTO student (name, address) VALUES ?";
var values = [
['Manisha Gupta', 'Kalyan'],
['Khushboo Asnani', 'Mulund'],
['Milind Dubal', 'Thane'],
['Geeta More', 'Thane'],
];
con.query(sql, [values], function (err, result) {
//if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});
});

/////////////////////////////////


//Write a Program to Delete record on „student‟ table.
//if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});
});
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "rainadb"
});
con.connect(function(err) {
// if (err) throw err;
var sql = "DELETE FROM student WHERE address = 'Thane'";
con.query(sql, function (err, result) {
// if (err) throw err;
console.log("Number of records deleted: " + result.affectedRows);
});
});

