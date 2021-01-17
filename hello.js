var http = require("http");
function serverCallback(req,resp){
    resp.writeHead(200,{'Content-Type':'text/plain'});resp.end("Hi this NodeJS");

}


http.createServer(serverCallback).listen(8081)

console.log("Server Running on: http://127.0.0.1:8081");