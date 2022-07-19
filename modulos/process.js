/* - Process
    Asi puedes acceder a los procesos de node senales, eventos, escucharlos */

/* const process = require('process'); */

/* porcess viene en nuestros modulos globales no hace falta hacer un require para llamarlo */


/* Esto ejecuta algo justo antes de terminar el proceso de node */

process.on('beforeExit', () => {
    console.log('Bryan el proceso va a terminar');
})


// process.on('')

/* Asi enviamos codigo una vez finalice el proceso de node */
process.on('exit', () => {
    console.log('Bryan el proceso acabo');
    /* Por lo que el proceso a finalizado ya estamos desconectados del event loop esto nofuncionaria */

    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);

    console.log('Pero de forma sincrona si podemos seguir camellando')

});

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 0);

/* Asi se escucha cuando no hay un tryatch o excepciones que no se an capturado */

process.on('uncaughtException', (err, origen) => {
    console.error('Valla se nos ha olvidado capturar un error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

/* Esto es una funcion no definida para que genere un error  y se ejecute el  uncaughtException */
//funcionQueNoexiste();

console.log('Esto si el error no se recoje, no sale');