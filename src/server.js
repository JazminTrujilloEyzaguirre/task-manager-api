const app = require('./app');
const http = require('http');
require('dotenv').config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})