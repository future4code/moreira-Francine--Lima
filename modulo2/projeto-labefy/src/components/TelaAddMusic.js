import React from "react";
import axios from "axios";
import styled from "styled-components";
const CardUsuario = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  button {
    color: red;
    border: 3px solid red;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
`;
const TelaParaAddMusic = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: cadetblue;
  button {
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  input {
    border: 3px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  h2 {
    color: brown;
  }
`;
export class TelaAddMusic extends React.Component {
  state = {
    musics: [],
    id: "",
    nome: "",
    artists: "",
    music: "",
    // playlistName: "",
  };
  handlePlaylistId = (event) => {
    this.setState({ id: event.target.value });
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  handleArtists = (event) => {
    this.setState({ artists: event.target.value });
  };

  handleMusic = (event) => {
    this.setState({ music: event.target.value });
  };
  componentDidMount() {
    this.addMusics(); //Mostra os usuários na tela ao abrir a tela sem precisar clicar em um botão
  }
  addMusics = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`;
    const body = {
      name: this.state.nome,
      artist: this.state.artists,
      url: this.state.music,
    };
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res); //ver o console com a resposta
        alert(`A música ${this.state.nome} foi criada com sucesso!`);
        this.setState({ nome: "", artists: "", url: "" }); //Limpando o input
        // this.getAllUsers();
      })
      .catch((err) => {
        console.log(err.response.data); //ver o console com o erro todo
        console.log(err); //ver o console com o erro
        alert(err.response.data.message);
        this.setState({ nome: "", artists: "", url: "" }); //Limpando o input
      });
    console.log(this.state); //Ver se está guardando o nome e email ao clicar
  };

  render() {
    // const listaMusics = this.state.musics.map((music) => {
    //   return (
    //     <CardUsuario key={music.id}>
    //       <p>{music.nome}</p>
    //       <p>{music.artist}</p>
    //       <p>{music.url}</p>
    //     </CardUsuario>
    //   );
    // });

    return (
      <div>
        <TelaParaAddMusic>
          <button onClick={this.props.irParaCriarPlaylist}>
            Criar nova playlist
          </button>
          <button onClick={this.props.irParaLista}>
            Ir para lista de Playlists
          </button>
          <h2>Adicione uma música</h2>

          <input
            placeholder={"Id da playlist"}
            value={this.state.id}
            onChange={this.handlePlaylistId}
          />
          <input
            placeholder={"Nome da música"}
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <input
            placeholder={"Artista(s)"}
            value={this.state.artists}
            onChange={this.handleArtists}
          />
          <input
            placeholder={"Url da música"}
            value={this.state.music}
            onChange={this.handleMusic}
          />
          <button onClick={() => this.addMusics()}>Adicionar música</button>
          {/* <button onClick={this.addMusics()}>Adicionar música</button> */}
        </TelaParaAddMusic>
      </div>
    );
  }
}
