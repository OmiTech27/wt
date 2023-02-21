var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('text.html',function(err,data){
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write("Page Not Found");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("Page Found");
            res.end();
        }
});
}).listen(8000);


////
//Server Routing Example:


r http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
   if(req.url=='/Java')
   {
    fs.readFile('Java.html',(err,data)=>{
        res.write(data);
    });
   }
   else if(req.url=='/python')
   {
    fs.readFile('python.html',(err,data)=>{
        res.write(data);
    });
   }
   else if(req.url=='/maths')
   {
    fs.readFile('maths.html',(err,data)=>{
        res.write(data);
    });
   }
   else{
    res.write('No Module Available')
   };
}).listen(8000);


////////////////////////////////////////////////
