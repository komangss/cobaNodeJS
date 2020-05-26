const http = require('http')

const  server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write('<h1>Hello Warudo</h1>')
        response.end()
    }
}) // this server is event emitter


server.listen(3000) // port

console.log('Listening on port 3000')
