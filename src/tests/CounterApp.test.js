import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp', () => {
    
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    });

    test('Debe mostrar correctamente los valores de defecto del contador', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Debe mostrar correctamente los valores de parametro del contador', () => {
        
        const wrapper = shallow( <CounterApp value = { 50 } /> );

        const valorContador = wrapper.find('h2').text();

        expect( valorContador ).toBe( '50' );

    })
    
    test('El contador debería restar -1 al apretar el boton', () => {

        wrapper.find('button').at(0).simulate('click');

        const valorContador = wrapper.find('h2').text();

        expect( valorContador ).toBe('9');

    })

    test('El contador debería sumar +1 al apretar el boton', () => {

        wrapper.find('button').at(2).simulate('click');

        const valorContador = wrapper.find('h2').text();

        expect( valorContador ).toBe('11');

    })

    test('El contador deberia volver a su valor inicial al apretar reset', () => {
        
        const wrapper = shallow( <CounterApp value = { 50 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valorContador = wrapper.find('h2').text();

        expect( valorContador ).toBe('50');

    })
    
    
})

