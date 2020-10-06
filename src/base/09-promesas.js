import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            reject('No se pudo encontrar el heroe');
        }, 1500);
 
    });

}