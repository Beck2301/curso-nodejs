const fs = require("fs");

//cb - callback

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        //Leido
        console.log(data.toString());
    })
}

let escribir = (ruta, contenido, cb) =>{
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.log("No he podido escribirlo")
        }else{
            console.log("Se ha escrito correctamente")
        }
    });
}

function borrar(ruta, cb){
    fs.unlink(ruta, function(err){
        if(err){
            console.log("No se ha borrado correctamente")
        }else{
            console.log("Se ha borrado correctamente")
        }
    });
}

//escribir(__dirname + "/texto1.txt", "Soy un archivo escrito desde Node.js :D", console.log);
//leer(__dirname + "/texto1.txt", console.log)
borrar(__dirname + "/texto1.txt", console.log)