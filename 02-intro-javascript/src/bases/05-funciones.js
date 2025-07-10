//Funciones en JS

const saludar = function (nombre) {
  return "Hola, " + nombre;
};

const saludar2 = (nombre) => {
  return "Hola, " + nombre;
};

const saludar3 = (nombre) => "Hola, " + nombre;

const saludar4 = () => "hola Mundo";

console.log(saludar("Fernando"));
console.log(saludar2("vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

//--------------

//Obviamos return, y al intentar retornar un objeto necesitamos usar parentesis

const getUser = () => ({
  uid: "ABC123",
  username: "El_crack123",
});

console.log(getUser());

//Tarea

const getUsuarioActivo = (nombre) => ({
  uid: "AHT534",
  username: nombre,
});

console.log(getUsuarioActivo("Luis"));
