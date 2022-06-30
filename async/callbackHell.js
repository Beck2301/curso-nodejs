function hola(nombre, micallback) {
    setTimeout(function () {
        console.log("Hola, " + nombre);
        micallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log("bla bla bla bla...");
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios, " + nombre);
        otroCallback()
    }, 1000);
}

//funcion recursiva

//En esta parte del código uso funciones recursivas porque estoy llamando a conversacion dentro de si misma.
// y mediante un If como estructura de control le digo que cantidad de veces va a  ejectuarse la funcion hablar.

function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }

}

// --
console.log("Iniciando proceso...");
hola("carlos", function(nombre){
    conversacion(nombre, 3, function(){
        console.log("proceso terminado")
    });
});

/****************HELL**********************/
// hola("Carlos", function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log("Terminando proceso...");
//                 });
//             });
//         });
//     });
// });



//RESUMEN:

// Los callback Hell se dan cuando empiezo a pasar una función como parámetro que a su vez llama a otra función como parámetro, y así hasta n.
// Una estrategia para trabajar con estas estructuras lógicas tan monolíticas es usar estructuras de control y funciones recursivas.

// Las funciones recursivas se llaman así mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la función así misma.