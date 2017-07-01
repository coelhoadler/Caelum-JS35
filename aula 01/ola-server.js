const http = require("http");
const port = 8080;
const ip = "0.0.0.0"; // = localhost
// import { http } from "http";

http.createServer((req, res) => {
    console.log("Recebendo request...");
    res.writeHead(200, {
      "Content-type" : "text/html"
    });
    res.end("<h1>ola mundo</h1>");

}).listen(port, ip);

console.info(`Servido de pe em http://${ip}:${port}`);
