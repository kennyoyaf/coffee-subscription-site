import styled from "styled-components";

export const JumbotronStyled = styled.section`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
