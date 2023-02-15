import heroes,{owners}   from '../data/heroes';

// console.log(owners);

// import {heroes} from './data/heroes';


export const getHeroeById = (id) => {

    return heroes.find( (heroe) => heroe.id === id);

}

// console.log(getHeroeById(3));

// filter

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));


