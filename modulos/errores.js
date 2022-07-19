
function otraFuncion(){
     serompe();
}


function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
            return 3 + z;
        }
        catch (err){
            console.error("Error en la funcion asincrona")
            cb(err)
        }
    })
}

try{
    // serompe();
    seRompeAsincrona(function(err){
        console.log(err.message)
    });
}catch(err){
    console.error("!Algo se ha roto")
    console.error(err)
}

console.log("esto de acá está al final")