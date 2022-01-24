import "./App.css";
import styled from "styled-components";
import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default class App extends React.Component {
  state = {
    cliqueProximaEtapa: 1,
    // divfalse:false,
  };
  //botão etapa 1

  irParaEtapa2 = () => {
    this.setState({ cliqueProximaEtapa: this.state.cliqueProximaEtapa + 1 });
  };

  render() {
    console.log(this.state);
    //  const handlechange=()=>{
    // this.setState({divfalse:!this.state.divfalse})

    // }
    const renderNextScreen = () => {
      switch (this.state.cliqueProximaEtapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;

        default:
          return <Final />;
      }
    };

    return (
      <div>
        <MainContainer>
          {renderNextScreen()}
          {/* </br> */}
          {this.state.cliqueProximaEtapa !== 4 && (
            <button onClick={this.irParaEtapa2}>Proxima Etapa</button>
          )}
        </MainContainer>
      </div>
    );
  }
}
