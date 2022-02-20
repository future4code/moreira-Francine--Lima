import React, { useState } from "react";
import axios from "axios";
import { InitialScreen } from "./components/InitialScreen";
import MatchesScreen from "./components/MatchesScreen";
import styled from "styled-components";
import sky from "./img/sky.jpg";

const Screen = styled.div`
  background-image: url(${sky});
  border: 10px solid;
  width: 400px;
  margin: 0 auto;
`;
const Options = styled.div`
  background: #fcfcfd;
  height: 50px;
  width: 100%;
  display: flex;

  justify-content: center;
  button {
    width: 120px;
    height: 25px;
    background: black;
    border-radius: 10px;
    border: none;
    color: white;
    margin: 10px 30px;
    cursor: pointer;
  }
`;

function App() {
  const [renderScreen, setRenderScreen] = useState(true);

  const goToProfiles = () => {
    setRenderScreen(!renderScreen);
  };

  //clearing all matches
  const clearAllMatches = () => {
    console.log("ea");
    const urlClear =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine/clear";
    const headersClear = {
      headers: { "Content-Type": "application/json" },
    };

    axios
      .put(urlClear, headersClear)
      .then((response) => {
        console.log(response.data);
        alert(`Você resetou todos os matches \u2764 `);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <Screen>
      <Options>
        {renderScreen ? (
          <span>
            <button onClick={() => goToProfiles()}>Matches</button>
          </span>
        ) : (
          <span>
            <button onClick={() => goToProfiles()}>Profiles</button>
          </span>
        )}
        <span>
          <button onClick={() => clearAllMatches()}>Resetar matches</button>
        </span>
      </Options>

      {renderScreen ? <InitialScreen /> : <MatchesScreen />}
    </Screen>
  );
}

export default App;
