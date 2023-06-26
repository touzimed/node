const http = require('http');

// Create a server
const server = http.createServer((request, response) => {
  // Set the response header
  response.setHeader('Content-Type', 'text/html');

  // Send the response
  response.end('<h1>Hello Node!!!!</h1>\n');
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});