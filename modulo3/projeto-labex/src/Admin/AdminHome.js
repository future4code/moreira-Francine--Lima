import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetTrips } from "../Hooks/useGetTrips";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { getUrl, deleteTripUrl } from "../constants/constants";

function AdminHome(props) {
  const [tripsList, setTripsList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const token = localStorage.getItem("token");
  useProtectedPage();
  //Router
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToDetails = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };

  // //Axios get trips
  const getTrips = () => {
    axios
      .get(getUrl)
      .then((res) => {
        // console.log("DadosTrips", res.data);

        setTripsList(res.data.trips);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  //Delete uma trip
  const deleteTrip = (id) => {
    axios
      .delete(`${deleteTripUrl}${id}`, {
        headers: {
          auth: token,
          Authorization: "Content-Type: application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsDeleted(!isDeleted);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrips();
  }, [isDeleted]);
  const tripsToChoose =
    tripsList &&
    tripsList.map((trip) => {
      return (
        <div key={trip.id}>
          <button
            onClick={() => {
              goToDetails(trip.id);
            }}
          >
            {trip.name}
          </button>
          <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={goToHome}>Voltar para home</button>
      <h1>LabeX</h1>
      <button onClick={goToCreateTrip}>Create Trip</button>
      <div>{tripsToChoose.length > 0 ? tripsToChoose : <p>Loading...</p>}</div>
    </div>
  );
}

export default AdminHome;
