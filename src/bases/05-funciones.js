

// Funtiones in JS


// let saludar = function saludar( nombre){

//     return`Hola, ${ nombre }`;
// } 

const saludar2 = ( nombre) => {

    return`Hola, ${ nombre }`;

}

const saludar3 = ( nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola, ${ 'Hola Mundo4' }`;

// console.log( saludar('Goku') );

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_papi102'
    })

const user = getUser();
console.log(user);



// Tarea

const getUsuarioActivo = ( nombre ) =>
    ({
        uid: 'ABC232',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');

;console.log(usuarioActivo);
