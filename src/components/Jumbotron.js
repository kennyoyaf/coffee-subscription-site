import { JumbotronStyled } from "./styles/Jumbotron.styled";

const Jumbotron = ({ heading, text, button, background }) => {
  return (
    <JumbotronStyled
      background={background}
      text={text}
      button={button}
      heading={heading}
    >
      <h2>{heading}</h2>
      <p>{text}</p>
      {button ? <button>{button}</button> : null}
    </JumbotronStyled>
  );
};

export default Jumbotron;
