import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../img/headert.png";
const Headers = styled.div`
  display: flex;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
`;
const ImgHeader = styled.img`
  cursor: pointer;
  width: 80px;
  margin: 20px;
`;
function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Headers>
      <ImgHeader
        cursor="pointer"
        src={icon}
        alt="icone para home"
        onClick={goToHome}
      />
    </Headers>
  );
}
export default Header;
