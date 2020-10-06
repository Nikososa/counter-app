import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    
    test('Debe retornar un heroe de manera Async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                
                expect( heroe ).toBe( heroes[0] );
                done();

            })
    });
    
    test('Debe retornar un mensaje de error si no devuelve un heroe', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe( 'No se pudo encontrar el heroe' );
                done();

            })
    });
})
