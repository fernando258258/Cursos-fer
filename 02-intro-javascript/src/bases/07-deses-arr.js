/* eslint-disable react-hooks/rules-of-hooks */
//Desestructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , pt] = personajes;

console.log(pt);

//------------- arreglos en funciones

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [misLetras, misNumeros] = retornaArreglo();

console.log(misLetras, misNumeros);

//----------------------------

const useState = (nombre) => {
  return [
    nombre,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [miNombre, miFuncion] = useState("Hulk"); //le asignamos nombres
console.log(miNombre);
miFuncion();
