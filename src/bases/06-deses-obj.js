
// Desestructuracion
// 

const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'

};



const usedContext = ({clave, nombre,edad,rango= 'Capitan'}) =>{

//   console.log( nombre,edad,rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.262,
            lng:-12.336
        }
    }


}


const {nombreClave, anios, latlng }= usedContext(persona);
const {lat,lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);

// console.log(nombre);
// console.log(edad);
// console.log(clave);