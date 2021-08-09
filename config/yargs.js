// CONFIGURAMOS YARGS - OPTION(key,[opt])
const argv = require('yargs')
        // b es la forma corta es el primer argumento, luego para el segundo argumento abrimos {} ya que será un objeto y podremos el alias base que hace referencia a la 'b' del primer argumento
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true, //significa que si o si debo darle un valor a la base, cuando ejecute "node app2-configYargs --base=5" se refiere al =5
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: false, //significa que si o si debo darle un valor a la base, cuando ejecute "node app2-configYargs --base=5" se refiere al =5
            default: false,
            // A traves del DESCRIBE podemos describir que hace cada flag (--b, --l) y aparecera en el --help
            describe: 'Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true, //significa que si o si debo darle un valor a la base, cuando ejecute "node app2-configYargs --base=5" se refiere al =5
            // A traves del DESCRIBE podemos describir que hace cada flag (--b, --l) y aparecera en el --help
            describe: 'Nos permite indicar hasta qué número iremos'
        })
        .check( (argv, options) => {
            if ( isNaN ( argv.b )) {
                throw 'La base tiene que ser un número' //con esto me aseguro que pongan un numero y no una letra por ej
            }
            return true;
        
        })
        
        .argv;
        
module.exports = argv;