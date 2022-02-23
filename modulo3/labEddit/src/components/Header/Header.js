import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon-header.png";
import { Headers, ImgHeader } from "./style";

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
      <p>LabEddit</p>
    </Headers>
  );
}
export default Header;
