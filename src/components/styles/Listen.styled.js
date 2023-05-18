import styled from "styled-components";

export const Listenstyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    width: 100%;
  }
`;
