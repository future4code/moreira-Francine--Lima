import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Feed from "./Pages/Feed/Feed";
import CommentSection from "./Pages/CommentSection/CommentSection";
import { useGet } from "../src/Hooks/useGet";
function App() {
  const { data, getData } = useGet("/posts?page=2");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route
          exact
          path={"/feed"}
          element={<Feed data={data} getData={getData} />}
        />
        <Route
          exact
          path={"/comments/:id"}
          element={<CommentSection getData={getData} data={data} />}
        />
        {/* //To set a default route in case of no match*/}
        <Route
          path={"*"}
          element={<div>Erro 404 - Página não encontrada</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
