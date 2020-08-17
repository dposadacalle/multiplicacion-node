// requireds 
const fs = require('fs'); // Ya existe en node, Solo al definimos (importamos del API)
const colors = require('colors');
const { rejects } = require('assert');

// Hay tres tipos de requiere: 
// const fs = require('express'); Paquete externo al API de node o no son nativos, (se instala) 
// const fs = require('./fs ó ../'); // Archivos creados en el proyecto (propios)

let listarTabla = (base, limite = 10) => {
    let k = 1;

    console.log('----------------------------------------'.green);
    console.log(`-----------Tabla de ${base}-------------`.green);
    console.log('----------------------------------------'.green);

    while (k <= limite) {
        console.log(`${base} * ${k} = ${base*k}`);
        k++;
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El Valor Introducido ${base}, no es un valor númerico`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}