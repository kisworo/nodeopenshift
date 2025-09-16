const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello OpenShift from Node.js!\n');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});