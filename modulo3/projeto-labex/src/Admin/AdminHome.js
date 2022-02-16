import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetTrips } from "../Hooks/useGetTrips";
import { getUrl, getTripDetails, headersToken } from "../constants/constants";
import TripDetails from "./TripDetails";

function AdminHome(props) {
  const [tripId, setTripId] = useState("");
  const [tripDetailsApproved, setTripDetailsApproved] = useState([]);
  const [tripDetailsCandidates, setTripDetailsCandidates] = useState([]);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  //Router
  const goToDetails = (id) => {
    navigate(`/admin/trips/${id}`);
    // setTripId(id);
  };

  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };
  //get list trips
  const tripsList = useGetTrips(getUrl);
  //trip details
  const getDetails = (id) => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/francine/trip/${id}`,
        {
          headers: { auth: token },
        }
      )
      .then((res) => {
        setTripDetailsApproved(res.data.trip.approved);
        setTripDetailsCandidates(res.data.trip.candidates);
        console.log(res.data);
        // setTripId(res.data.trip.id)
        console.log(res.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err.response);
      });
    return setTripId(id);
  };
  useEffect(() => {
    getDetails();
  }, []);
  const tripsToChoose =
    tripsList &&
    tripsList.map((trip) => {
      return (
        <div key={trip.id}>
          <button
            onClick={() => {
              // goToDetails(trip.id);
              getDetails(trip.id);
            }}
          >
            {trip.name}
          </button>
          <button>Deletar</button>
        </div>
      );
    });
  console.log("id", tripId);
  const tripDetailApproved =
    tripDetailsApproved &&
    tripDetailsApproved.map((detail) => {
      return <TripDetails name={detail.nome} />;
    });
  const tripDetailCandidates =
    tripDetailsCandidates &&
    tripDetailsCandidates.map((detail) => {
      return (
        // <p key={detail.id}>{detail.name}</p>

        <TripDetails
          key={detail.id}
          nome={detail.name}
          tripId={tripId}
          id={detail.id}
          age={detail.age}
          profession={detail.profession}
          applicationText={detail.applicationText}
          country={detail.country}
        />
      );
    });

  return (
    <div>
      <button onClick={goToHome}>Voltar para home</button>
      <h1>LabeX</h1>
      <button onClick={goToCreateTrip}>Create Trip</button>
      <div>
        {tripsToChoose}
        {tripDetailCandidates}
        {tripDetailApproved}
        {/* <button onClick={goToDetails}>Ver detalhes</button> */}
      </div>
    </div>
  );
}
//  <button>Aprovado</button>
//       <button>Reprovado</button>
export default AdminHome;
