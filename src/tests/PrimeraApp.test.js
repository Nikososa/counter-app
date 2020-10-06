import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
    
    test('Debe mostrar PrimeraApp correctamente', () => {

        const saludo = 'Bienvenido';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } />)

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar el subtitulo correctamente', () => {

        const saludo = 'Bienvenido';
        const subtitulo = 'Prueba de primeraApp'
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        )

        const textoParrafo = wrapper.find('p').text(); // Recupera elemento 'p' y obitene el texto que encierra
        
        expect( textoParrafo ).toBe( subtitulo );

    })
})
