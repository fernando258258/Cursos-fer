export const FirstApp = ({ title, subTitle }) => {
  // console.log(props);
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
    </>
  );
};

//Nota: se agrega JSON.stringfy por que no se puede llamar directamente al objeto
