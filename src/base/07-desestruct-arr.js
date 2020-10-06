const personajes = ['Goku', 'Vegeta', 'Xelidian'];

const [p1, p2, p3] = personajes;


export const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

//Tarea

const useState = (nombre) => {
    return [ nombre, ()=>{ console.log('Hola Mundo')}];
}