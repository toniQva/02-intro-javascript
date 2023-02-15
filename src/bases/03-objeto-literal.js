const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 25454545,
        lat: 14.232,
        lng:23.4545
    }
};



// console.table(  persona );


const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona2);
console.log(  persona );