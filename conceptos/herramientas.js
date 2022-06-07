// RESUMEN:

// Cuando estamos en Desarrollo
// npm i -g nodemon
// Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose
// nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.
//https://nodemon.io/

// Cuando estamos en Producción

//  npm i -g pm2

// PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

// Voy a poner monitorizar el código para saber si algo se rompe.
// Me permite ver dashboards de mi código, puedo ver que está corriendo.
// Puedo ver el rendimiento de mi cpu
// Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.

//se instala: npm i -g nodemon

//https://pm2.keymetrics.io/

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
                             
