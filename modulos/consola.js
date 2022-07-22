// console.log("algo")
// console.error("algo")
// console.warn("algo")

//tabla

// var tabla = [
//     {
//         a: 1,
//         b: "z"
//     },{
//         a: 2,
//         b:"y"
//     }
// ]

// console.table(tabla)


//grupos 

// console.group("Conversacion")
// console.log("Hola")
// console.group("bla")
// console.log("Blabla")
// console.log("Blabla")
// console.log("Blabla")
// console.groupEnd("bla")
// console.log("Adios")
// console.groupEnd("Conversacion")


/*Ejemplo en funciones de console.group */

function function1() {
    console.group('funcion1');
    console.log('Esto es de la funcion 1');
    console.log('Esto también')
    function2();
    console.log('He vuelo a la 1');
    console.groupEnd('funcion1');
}
function function2() {
    console.group('funcion2');
    console.log('ahora estamos en la funcion 2')
    console.groupEnd('funcion2');
}
console.log('Empezamos');
function1();

/*Contador en consola*/
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces'); //Resetea el contador
console.count('veces');
console.count('veces');
