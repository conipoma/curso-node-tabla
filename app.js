const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);

crearArchivo(  argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow.bold, 'impreso') )
    .catch( err => console.log(err));