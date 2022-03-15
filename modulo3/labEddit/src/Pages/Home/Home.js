import Header from "../../components/Header/Header";
import { useChangePage } from "../../Hooks/useChangePage";
import { useChangePageLogin } from "../../Hooks/useChangePageLogin";
import {
  ImageHome,
  HomeContainer,
  ButtonContainer,
  ContainerTitle,
} from "./style";
import social from "../../assets/social.png";
function Home() {
  const { goTo } = useChangePage("/signup");
  const { goToLogin } = useChangePageLogin("/login");
  return (
    <div>
      <Header />
      <HomeContainer>
        <ImageHome src={social} />
        <ContainerTitle>LabEddit</ContainerTitle>
        <ButtonContainer>
          <button onClick={goToLogin}>Login</button>
          <button onClick={goTo}>Cadastrar</button>
        </ButtonContainer>
      </HomeContainer>
    </div>
  );
}
export default Home;
