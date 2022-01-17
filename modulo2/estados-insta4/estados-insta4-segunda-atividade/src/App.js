import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 250px;
  input{
  padding: 10px;
  margin:5px;
  }
  button{
    padding: 12px;
    margin:10px;
    color: white;
    background-color: black;
    border-radius: 12%;
  }
`;
  

class App extends React.Component {
  state = {
    // NOVO OBJETO PARA PERMITIR A CRIAÇÃO DE NOVOS POSTS
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",

    postes: [
      // O objeto abaixo representa um Post

      {
        nomeUsuario: "Adala",
        fotoUsuario: "https://picsum.photos/200/150",
        fotoPost: "https://picsum.photos/200/155",
      },
      {
        nomeUsuario: "Arla",
        fotoUsuario: "https://picsum.photos/200/153",
        fotoPost: "https://picsum.photos/200/154",
      },
      {
        nomeUsuario: "Jeni",
        fotoUsuario: "https://picsum.photos/200/152",
        fotoPost: "https://picsum.photos/200/152",
      },
    ],
  };
  //1-PARA ----ADICIONAR UM NOVO POST--- 1º CRIO UMA COPIA DO OBJETO POSTES-----------------
  addPost = () => {
    const newPostes = [
      ...this.state.postes,
      {
        nomeUsuario: this.state.inputNomeUsuario,
        fotoUsuario: this.state.inputFotoUsuario,
        fotoPost: this.state.inputFotoPost,
      },
    ];
    //PARA ZERAR OS INPUTS AO PRESSIONAR O BOTÃO ENVIAR------------------------------
    this.setState({
      postes: newPostes,
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
    });
  };
  //2-COLETANDO DADOS DO POST---------------------------------------

  colectingNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };
  colectingFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };
  colectingFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  render() {
    const newPost = this.state.postes.map((item, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />
      );
    });

    return (
      <div>
        <InputContainer>
          {/* 3-INSERINDO OS VALORES DE VALUE E ONCHANGE PARA REALIZAR A CAPTURA DO NOVO DADO COM O EVENT------------------------------------- */}
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.colectingNomeUsuario}
            placeholder="Nome"
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.colectingFotoUsuario}
            placeholder="Foto do Perfil"
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.colectingFotoPost}
            placeholder="Postar foto"
          />
          {/* 4-ENVIANDO POSTS AO CLICAR NO BOTÃO-------------------------------------- */}
          <button onClick={this.addPost}>Criar Post!</button>
        </InputContainer>
        <MainContainer>{newPost}</MainContainer>
      </div>
    );
  }
}

export default App;
