//eventEmiterr Practical
// on 
// off
// emit
// once
// removeListener
// removeAllListeners
var http=require('http');
var eventEmitter=require('events');
const { off, emit, removeListener, removeAllListeners, listeners } = require('process');
var em= new eventEmitter();
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'Text/html'});
    res.write("<h1>EVENT EMITTER PROGRAM:<br>")

em.on('click',()=>{
    res.write("My Click event1 <br>");
});
em.once('click',()=>{
    res.write("My Click event2");
});
em.once('click',()=>{
    res.write("My Click event3");
});
// em.removeAllListeners('click',()=>{
//     console.log("My Click event3");
// });
em.emit('click');
}).listen(8000);
