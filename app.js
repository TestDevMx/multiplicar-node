

const argv   = require('./config/yargs').argv;
const colors = require('colors/safe');



const { crearArchivo, crearArchivoAsync, listarTabla } = require('./multiplicar/multiplicar');
// let argv2 = process.argv;
// let parametro =  argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.baseb)
let comando = argv._[0];

// console.log(argv.limite)

switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
    crearArchivo( argv.base, argv.limite )
        .then( archivo => console.log(`Archivo creado: ${ colors.green( archivo) }`))
        .catch(err => console.log(err));
    break;
    default:
        console.log(`El comando: ${ comando} no es reconocido!!`);
}





// crearArchivoAsync( base )
//     .then(console.log)
//     .catch(console.log)

// console.log(process.argv);

