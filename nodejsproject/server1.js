
var http=require("http");
var server=http.createServer(function(request,response)
{
	response.writeHead(200,{'content-type':'text'});
	response.end("sucess");
});

server.listen(3000,function(){
	console.log("server is listening at 3000");
})