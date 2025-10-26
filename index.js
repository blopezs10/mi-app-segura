// Una aplicación web simple para simular tu app
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo! Esta es mi app segura.\n');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
