var http = require('http');

var server = http.createServer(function(req,res){
  res.end("<html><body><h1>Deploy Successed!</h1></body></html>");
});

server.listen(process.env.PORT || 3000);
console.log("Server is running!");