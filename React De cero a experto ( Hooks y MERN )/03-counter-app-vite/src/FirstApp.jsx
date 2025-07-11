// const newMessage = {
//   message: "Hola Mundo",
//   tittle: "Fernando",
// };

const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = () => {
  return (
    <>
      <h1>{getResult(2, 2)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
};

//Nota: se agrega JSON.stringfy por que no se puede llamar directamente al objeto
