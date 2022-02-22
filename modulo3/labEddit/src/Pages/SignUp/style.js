import styled from "styled-components";

export const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  margin: 0 auto;
  width: 400px;
  height: 350px;
  background-color: #efefef;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    align-self: flex-start;
    font-size: 14px;
  }
  input {
    font-size: 14px;
    font-family: monospace;
    font-weight: lighter;
    align-self: start;
    border-radius: 5px;
    outline: none;
    width: 200px;
    background-color: white;
    transition: padding 0.3s 0.2s ease;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  button {
    font-size: 14px;
    letter-spacing: 2px;
    color: #31322e;
    cursor: pointer;
    border: 3px solid;
    margin: 28px;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;
  }
`;
