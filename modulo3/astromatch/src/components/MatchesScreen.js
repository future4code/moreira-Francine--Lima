import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const MatchScreen = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  img {
    margin-top: 2px;
    border-radius: 50%;
    border: 2px solid white;
    width: 50px;
    height: 50px;
  }
`;
const Card = styled.div`
  background: #202020;
  margin: 10px;
  span {
    margin: 0 14px;
    font-size: 18px;
  }
`;
function MatchesScreen(props) {
  const [match, setMatch] = useState([]);

  const getMatches = () => {
    const urlMatches =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine/matches";
    axios
      .get(urlMatches)
      .then((res) => {
        setMatch(res.data.matches);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  useEffect(() => {
    getMatches();
  }, [match]);

  return (
    <MatchScreen>
      {match.map((person) => {
        return (
          <Card key={person.id}>
            <img src={person.photo} />
            <span>{person.name}</span>

            <hr />
          </Card>
        );
      })}
    </MatchScreen>
  );
}
export default MatchesScreen;
