import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funcionFlecha';

describe('Pruebas en 05-funcionFlecha', () => {
    
    test('getUser debe retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'Xelidian',
        }

        const user = getUser()

        expect(user).toEqual(userTest)
    })

    test('getUsuarioActivo debe retornar un objeto ', () => {
        
        const nombreTest = 'Xelidian';

        const userTest = {
            uid: 'abc123',
            username: nombreTest,
        }

        const user = getUsuarioActivo(nombreTest)

        expect(user).toEqual(userTest)
    })

})
