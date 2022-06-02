import styled from "styled-components";

export const ContainerHeaderLogin = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  background-color: #91b082;
  align-items: center;
  top: 0;

  position: sticky;
  img {
    width: 66px;
    height: 70px;
    margin: 0px 20px;
    border-radius: 50%;
  }
`;

export const ContainerNavigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  margin: 0px 30px;
`;
export const StyledLink = styled.link`
  text-decoration: none;
`;
