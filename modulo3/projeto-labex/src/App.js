import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListTrips from "./ListTripsPublic/ListTrips";
import ApplicationForm from "./ListTripsPublic/ApplicationForm";
import Login from "./Admin/Login";
import AdminHome from "./Admin/AdminHome";
import CreateTrip from "./Admin/CreateTrip";
import TripDetails from "./Admin/TripDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/trips/list"} element={<ListTrips />} />
        <Route
          exact
          path={"/trips/application"}
          element={<ApplicationForm />}
        />
        <Route exact path={"/login"} element={<Login />} />

        <Route exact path={"/admin/trips/list"} element={<AdminHome />} />

        <Route exact path={"/admin/trips/create"} element={<CreateTrip />} />
        <Route exact path={"/admin/trips/:id"} element={<TripDetails />} />
        {/* <Route
          exact
          path="/admin/trips/:id"
          render={(props) => <TripDetails id={props.match.params.id} />}
        /> */}
        <Route element={<ListTrips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
