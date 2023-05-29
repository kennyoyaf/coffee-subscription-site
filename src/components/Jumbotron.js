import { JumbotronStyled } from "./styles/Jumbotron.styled";

const Jumbotron = ({
  heading,
  text,
  button,
  background,
  lgbackground,
  tabbackground,
}) => {
  return (
    <JumbotronStyled
      background={background}
      lgbackground={lgbackground}
      tabbackground={tabbackground}
    >
      <h2>{heading}</h2>
      <p>{text}</p>
      {button ? <button>{button}</button> : null}
    </JumbotronStyled>
  );
};

export default Jumbotron;
