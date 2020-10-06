//Desestructuracion
//Asignación Desesctructurante

const persona = {
    nombre: 'Nicolas',
    edad: 25,
    clave: 'Xelidian',
}

/*const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave); */

const useContext = ({ nombre, edad, clave }) => {

    //console.log(nombre, edad);

    return {
        nombreClave: clave,
        anios: edad,
        posicion: {
            lat: 14.1234,
            lon: -15.1554,
        }
    }
}

const crack = useContext(persona);

const {nombreClave, anios, posicion: {lat, lon}} = crack; //desestructuracion de crack

console.log(nombreClave, anios);
console.log(lat, lon);