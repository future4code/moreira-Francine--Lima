import React from "react";
import axios from "axios";
import styled from "styled-components";
// import { TelaListaPlaylists } from "./TelaListaPlaylists";
const Page = styled.div`
  background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  height: 100vh;
  width: 100%;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const CardSong = styled.div`
  color: #ab381f;
  font-weight: bold;

  li {
    list-style-type: none;
  }
`;
const MenuLateral = styled.div`
  display: grid;
  align-content: space-around;
  width: 160px;
  margin-left: 50px;
  height: 300px;
  margin-top: 100px;
  button {
    font-size: 20px;
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    width: 150px;
    height: 60px;
  }
`;
const TelaOuvirMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  button {
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
    margin-top: 30px;
    font-size: 20px;
  }
  input {
    border: 3px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  h2 {
    color: brown;
    font-size: 45px;
  }
`;
const Line = styled.hr`
  border: 5px solid #f7797d;
  width: 600px;
`;

export class TelaSongListen extends React.Component {
  state = {
    track: [],
    id: "",
    playlists: [],
  };
  // state = {
  //     ,
  //     playlistDetails: [],
  //   };
  componentDidMount() {
    this.pegarPlaylists(); //Mostra os usuários na tela ao abrir a tela sem precisar clicar em um botão
  }
  //   componentDidUpdate() {
  //     this.pegarUsuarios(); //Atualiza a tela quando eu deleto o usuário, pegando a lista de novo e deletando o usuário imediatamente
  //   }

  pegarPlaylists = () => {
    // console.log(this.state); //Ver se realmente estou pegando os usuarios

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
        //   console.log([res]); //Ver os dados no console
        //   console.log(res.data.result.list);
      })
      .catch((err) => {
        // console.log(err);

        alert(
          "Ocorreu um problema, pode ser que você não esteja conectado a internet, tente novamente mais tarde."
        );
      });
  };

  detailsPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data.result.tracks);
        this.setState({ track: res.data.result.tracks });
        // this.detailsPlaylist(); //fazendo o mesmo do did update mas de outra forma, pegando os usuarios de novo apos o deletar.
      })
      .catch((err) => {
        console.log(err);
        // alert("Ocorreu um erro tente novamente mais tarde");
      });
  };

  render() {
    const listaPlaylists1 = this.state.playlists.map((playlist) => {
      return (
        <CardSong key={playlist.id}>
          <button onClick={() => this.detailsPlaylist(playlist.id)}>
            {playlist.name}
          </button>
          <Line />
        </CardSong>
      );
    });

    // // console.log(this.state.track);
    const listaTracks = this.state.track.map((track) => {
      return (
        <CardSong key={track.id}>
          <details>
            <summary>Música:</summary>
            <li>Nome da música: {track.name}</li>
            <li>Nome do Artista: {track.artist}</li>
            <audio controls src={track.url} />
          </details>
        </CardSong>
      );
    });

    return (
      <div>
        <Page>
          <MenuLateral>
            <button onClick={this.props.irParaCriarPlaylist}>Home</button>
            <button onClick={this.props.irParaLista}>
              Ir para lista de Playlists
            </button>
          </MenuLateral>
          <TelaOuvirMusic>
            <br />
            <h2>Ouça uma música</h2>

            <br />
            <br />
            {listaPlaylists1}
            {listaTracks}
          </TelaOuvirMusic>
        </Page>
      </div>
    );
  }
}
