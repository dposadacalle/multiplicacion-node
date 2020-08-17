/***
 * const argv = require('yargs')
    .command('listar', 'Digite La Tabla de Multiplicar: ', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un Archivo con la Tabla de Multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
 */

const argv = require('./config/yargs').argv;

//const colors = require('colors');

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

// let base = 'abc';

// Process: es una Variable de Entorno, que Node que crea cuando se Ejecuta
// console.log(process.argv);

// let argv2 = process.argv;

// console.log(`Limite: ${argv.limite} - Base: ${argv.base}`); // Este es de yargs 
// console.log(argv2); // Este es recibo en process

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// sconsole.log(base);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: `, colors.bgGreen(archivo)))
            .catch(err => console.log(colors.red(err)));
        break;
    default:
        console.log(colors.magenta('Comando No Reconocido'));
}

// let file_color = (archivo) => {
//     return archivo.green;
// }