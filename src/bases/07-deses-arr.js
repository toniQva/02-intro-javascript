const personajes = ['Goku','Vegueta','Trunks'];

const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () =>{

    return ['ABC', 123];
}

const [ letras, numeros] = retornaArreglo();

console.log(letras,numeros);

// Tarea
const prueba = (valor) => {

    return [valor, () => {console.log('Hola Mundo')}];
}



// arr[1]();

// console.log(arr);
const [ nombre,setNombre] = prueba('Goku');


console.log(nombre);
setNombre();



