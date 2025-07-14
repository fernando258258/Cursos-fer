import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  tittle: PropTypes.string.isRequired,
  subTitletittle: PropTypes.string.string,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Fernando Ricaldes",
};
