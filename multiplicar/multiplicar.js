const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base, limite ) =>{

    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`${ base } no es un número`);
            return; 
        }
        let data = '';

        for (let i = 1; i <= limite; i++){
            data += (`${ base } * ${ i } = ${ base * i } \n`);
        }
        fs.writeFile(`./tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) 
                reject( err )
            else 
                resolve( `tabla-${ base }-al-${ limite }.txt` )
        });

    });

}

const crearArchivoAsync = async ( base ) =>{

    if( !Number(base) ) {
        return `${ base } no es un número`;
    }

    let data = '';

    for (let i = 1; i <= 10; i++){
        data += (`${ base } * ${ i } = ${ base * i } \n`);
    }


    fs.writeFile(`./tablas/tabla-async-${ base }.txt`, data, (err) => {
        if (err) 
        return err ;
    });

    return  `tabla-async-${ base }.txt`;
}



const listarTabla = ( base, limite ) => {
     console.log('=================='.green);
     console.log(`=== tabla de ${ base } ===`);
     console.log('=================='.green);
    for(let i = 1; i <= limite; i++ ){
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }


};

module.exports = {
    crearArchivo,
    crearArchivoAsync,
    listarTabla
}
