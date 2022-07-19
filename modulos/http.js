var http = require('http');

http.createServer(function (request, response) {
    console.log("Nueva petición");
    console.log(request.url);

    response.writeHead(201, {"Content-Type": "text/plain"})
    //escribir espuesta al usuario
    response.write("Ya se usar HTTP de NojeJS")
    response.end();
}).listen(3000); 

console.log("Escuchando htttp en el puerto 3000")


http.createServer(theServer).listen(3001);

function theServer(req, res) {
    console.log("nueva petición");
    console.log(req.url);
    switch (req.url) {
        case "/hola":
            res.write("Bienvenido a hola");
            res.end();
            break;
        case "/node":
            res.write("Comienza a aprender NodeJs");
            res.end();
            break;
        default:
            res.write("Error 404 Page No Found");
            res.end();
            break;
    }
}
console.log("Escuchando en el puerto 30001")