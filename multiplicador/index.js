
const colors = require('colors');  //librerias al inicio
const fs = require('fs');
const {logica} = require('./logica');

const multiplicar = (base, limite, visualizar) => {

    const resultado = logica(base, limite);

    if(visualizar) {
        console.log('================='.green);
        console.log(`Tabla del ${base}`);
        console.log('================='.green);
        console.log(resultado);
    }
       
    const nombreArchivo = `tabla-del ${base}.txt`
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if(err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado!`.rainbow); //rainbow darle color en la consola
    });
}

module.exports = {
    multiplicar
}