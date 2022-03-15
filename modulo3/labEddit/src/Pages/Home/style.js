import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 300px;
  margin-right: 652px;
  margin-bottom: 436px;
  position: absolute;
  button {
    color: #59d48f;
    background-color: transparent;
    font-size: 17px;
    font-weight: bolder;
    width: 100px;
    margin: 0 2px;
    height: 40px;
    touch-action: manipulation;
    cursor: pointer;
    border: 5px dotted #05396b;

    :hover {
      background-color: white;
      cursor: pointer;
      border: 5px dotted #59d48f;
      color: #59d48f;
    }
    /* @media (min-width: 768px) {
      .button-51 {
        padding: 16px 32px;
      } */
  }
`;
export const ContainerTitle = styled.div`
  color: white;
  position: absolute;
  font-size: 70px;
  font-weight: bold;
  margin-right: 700px;
  margin-bottom: 200px;
`;

export const ImageHome = styled.img`
  width: 90vw;
  height: 500px;
  display: flex;
`;
