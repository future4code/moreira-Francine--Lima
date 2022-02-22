import Header from "../../components/Header/Header";
import { useChangePage } from "../../Hooks/useChangePage";
import { useChangePageLogin } from "../../Hooks/useChangePageLogin";
function Home() {
  const { goTo } = useChangePage("/signup");
  const { goToLogin } = useChangePageLogin("/login");
  return (
    <div>
      <Header />
      <div>
        <button onClick={goToLogin}>Login</button>
        <button onClick={goTo}>Cadastre-se</button>
      </div>
    </div>
  );
}
export default Home;
