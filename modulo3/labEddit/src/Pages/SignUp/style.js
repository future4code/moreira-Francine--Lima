import styled from "styled-components";

export const SignUpPageContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  margin: 0 auto;
  width: 500px;
  height: 460px;
  background-color: #db74ff;
  border-radius: 16px;
`;
export const FormContainer = styled.form`
  p {
    font-size: 18px;
  }
  input {
    font-size: 16px;
    font-family: monospace;
    font-weight: lighter;
    height: 30px;
    border-radius: 5px;
    outline: none;
    width: 250px;
    background-color: white;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin-top: 30px;
  button {
    color: white;
    background-color: transparent;
    font-size: 16px;
    font-weight: 700;
    width: 150px;
    margin: 0 15px;
    height: 40px;
    touch-action: manipulation;
    background-color: #f9d745;
    cursor: pointer;
    border: 5px dotted #59d48f;
    color: #05396b;
    :hover {
      background-color: white;
      cursor: pointer;
      border: 5px dotted #05396b;
      color: #59d48f;
    }
  }
`;
