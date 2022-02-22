import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Feed from "./Pages/Feed/Feed";
import CommentSection from "./Pages/CommentSection/CommentSection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/feed"} element={<Feed />} />
        <Route exact path={"/comments/:id"} element={<CommentSection />} />
        {/* <Route exact path={"/admin/trips/:id"} element={<TripDetails />} /> */}
        {/* <Route element={<ListTrips />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
