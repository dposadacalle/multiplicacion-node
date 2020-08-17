const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Digite La Tabla de Multiplicar: ', opts)
    .command('crear', 'Genera un Archivo con la Tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}