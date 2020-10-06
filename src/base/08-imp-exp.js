import heroes from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

//console.log( getHeroeById(1) );

export const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

//console.log( getHeroesByOwner('DC') );
