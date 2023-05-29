const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World\n')
  response.end('Info: ' + process.env + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
