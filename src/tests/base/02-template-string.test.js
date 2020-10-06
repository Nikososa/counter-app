import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {
    
    test('Prueba en metodo getSaludo', () => {
        
        const nombre = 'Nicolas';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre)
    })

    test('Prueba en metodo getSaludo sin argumentos', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos')
    })
    
})
