import { retornaArreglo } from '../../base/07-desestruct-arr';

describe('Pruebas en desestructuracion', () => {
    
    test('Debe retornar un String y un Numero ', () => {
        
        const [ letras, numeros] = retornaArreglo();

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' )

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' )

    })

})
