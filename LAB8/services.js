var http = require("http");

http.createServer(function (req, res){
    res.writeHead(200, { "content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
})
.listen(3000);