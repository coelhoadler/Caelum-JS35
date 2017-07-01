const http = require('http')
const port = 3000
const ip = 'localhost'

http.createServer(function() {
  res.writeHeader({'Content-type' : 'text/html'})
  res.end('<h1>Uma mensagem na tela!</h1>')
}).listen(port, ip)

console.log(`Servidor de pé em: http://${ip}:${port}`)
console.log('Para derrubar o servidor: ctrl+c')
