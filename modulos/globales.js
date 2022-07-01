
let i = 0;

let intervalo = setInterval(function () {
    console.log("hola")
    if (i == 3) {
        clearInterval(intervalo)
    }
    i++;
}, 1000);


setImmediate(function () {
    console.log("Hola");
});

console.log(__filename);

// Node funciona a base de módulos, los módulos son el código que permite a Node tener ciertas funcionalidades.

// Para que Node funcione correctamente siempre ha de tener sus módulos globales, son aquellos módulos que nos permiten usar la mayoría 
// de funcionalidades básicas y complejas que conocemos de Node, como setTimeout, setInerval, etc.

// Estos módulos los podemos usar sin necesidad de importarlos explícitamente en nuestro código, pueden ser usados en cualquier archivo de Node.


// Globals
// Los módulos globales son muchos módulos que vienen en Node.js que vienen incluidos en módulos globales. 
// En nodejs tenemos el objeto global que tiene métodos y propiedades, a esto es lo que se le llama módulos globales.

// Algunos módulos globales:

// setInterval
// setImmediate
// require
// __dirname
// __filename
// 🔥 Si puedes no usar variables globales, no lo hagas.

// Así declaras un variable global:

global.variableGlobal = 'valor'

console.log(variableGlobal)

//👀 En node this es un alias de global
// this === global




