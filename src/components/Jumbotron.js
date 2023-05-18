import { JumbotronStyled } from "./styles/Jumbotron.styled";

const Jumbotron = ({ heading, text, button, background }) => {
  return (
    <JumbotronStyled background={background}>
      <h2>{heading}</h2>
      <p>{text}</p>
      {button ? <button>{button}</button> : null}
    </JumbotronStyled>
  );
};

export default Jumbotron;
