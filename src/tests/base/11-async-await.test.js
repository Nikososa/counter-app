import { getImage } from "../../base/11-async-await";

describe('Pruebas con asyn-await', () => {
    
    test('Debe retornar el url del gif', async() => {
        
        const url = await getImage();

        expect( url.includes( 'https://' ) ).toBe( true );

    })

})
