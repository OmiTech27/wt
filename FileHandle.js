var fs = require('fs');
var r = fs.readFileSync('demo.txt', 'utf-8');
console.log(r);

//////////////////////
//htmlfile
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('demo.txt', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(8080);

///////////////////////
//Read file from HTML to HTTP Server

//html
<html>
<body>
<h1>My Header</h1>
<p>My Testing Page of HTML</p>
</body>
</html>

//js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
Create Files or Write File
Read & Write File
fs.readFile('demofile.html', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(3000);


//Create Files or Write File
Read & Write File
fs.readFile('demofile.html', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(3000);
var fs = require('fs');
fs.writeFile('file3.txt', 'This is content of write file!', function (err) {
console.log('File Saved!');
});

//Read & Write File
fs.readFile('demofile.html', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(3000);
var fs = require('fs');
fs.writeFile('file3.txt', 'This is content of write file!', function (err) {
console.log('File Saved!');
});
var fs = require("fs");
var r = fs.readFileSync('demo.txt', 'utf-8');
fs.writeFileSync('c.txt',r);
console.log ("File Copied to successfully");

//Update Files
//Delete Files
var fs = require('fs');
fs.appendFile('xyz.txt', ' This is my text.', function (err) {
console.log('Updated!');
});

var fs = require('fs');
fs.unlink('sample.txt', function (err) {
console.log('File deleted!');
});

