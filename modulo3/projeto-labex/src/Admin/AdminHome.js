import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { getUrl, deleteTripUrl } from "../constants/constants";
import Header from "../Header/Header";
import styled from "styled-components";
const PageContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  width: 400px;
  margin: 0 auto;
  h1 {
    font-size: 30px;
    font-weight: bold;
    padding: 30px;
  }
`;
const ContainerTrips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  width: 100%;
  height: 100%;
  gap: 20px;
  margin: 40px;
  justify-items: center;
  justify-content: center;
`;
const ContainerCardTrips = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 60px; */
  width: 300px;
  height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;
const ButtonDelete = styled.button`
  height: 26px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #31322e;
  cursor: pointer;
  border: 3px solid;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  margin: 30px;
  button {
    font-size: 14px;
    letter-spacing: 2px;
    color: #31322e;
    cursor: pointer;
    border: 3px solid;
    width: 200px;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;
  }
`;

function AdminHome(props) {
  const [tripsList, setTripsList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const token = localStorage.getItem("token");
  useProtectedPage();
  //Router
  const navigate = useNavigate();
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
        alert("Viagem deletada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrips();
  }, [isDeleted]);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const tripsToChoose =
    tripsList &&
    tripsList.map((trip) => {
      return (
        <div>
          <ContainerCardTrips
            key={trip.id}
            onClick={() => {
              goToDetails(trip.id);
            }}
          >
            {trip.name}
          </ContainerCardTrips>
          <ButtonDelete onClick={() => deleteTrip(trip.id)}>
            Deletar
          </ButtonDelete>
        </div>
      );
    });

  return (
    <div>
      <Header />
      <PageContainer>
        {/* <Header /> */}
        <h1>Bem vindx de volta</h1>
        <ButtonContainer>
          <button onClick={goToCreateTrip}>Criar viagem</button>
          <button onClick={logout}>Logout</button>
        </ButtonContainer>
        <ContainerTrips>
          {tripsToChoose.length > 0 ? tripsToChoose : <p>Loading...</p>}
        </ContainerTrips>
      </PageContainer>
    </div>
  );
}

export default AdminHome;
