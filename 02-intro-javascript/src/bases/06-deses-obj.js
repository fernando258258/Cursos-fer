/* eslint-disable react-hooks/rules-of-hooks */
//Extraccion normal

const ejemplo = {
  dato1: "Texto",
  dato2: 100,
  dato3: "Texto2",
};

console.log(ejemplo.dato1);
console.log(ejemplo.dato2);
console.log(ejemplo.dato3);

// Desestructuracion

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { edad, clave } = persona;

console.log(edad);
console.log(clave);

//NOTA: si ya existe alguna constante con el mismo nombre, colocarle otro en el formato const { edad: edadDato, clave: claveDato } = persona; y luego llamarlo asi console.log(edadDato); console.log(claveDato);

//Extraccion por medio de funcion - Tambien agregamos otro dato de forma directa: rango

const retornaPersona = ({ nombre, edad, rango = "Soldado" }) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);

//----------------

const retornaPersona2 = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const heroe = retornaPersona2(persona);
console.log(heroe);

//Extraccion de los valores en version anidada

const useContext = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
