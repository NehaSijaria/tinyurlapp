const http = require("http");
const PORT= 8080;

//function that will handle request and sends responses

const requestHandler = function(request, response) {
  if(request.url === "/") {
    console.log('-------I am request-----', request)
    response.end('Welcome to the home page')
  }
  if(request.url === "/url") {
    response.end('www.lighthouselabs.ca\nwww.google.co')
  }
 else {
  response.statusCode = 404;
  response.end("404 Page Not Found");
 }
 return response;
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
})
