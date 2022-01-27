import React from "react";
import axios from "axios";
import styled from "styled-components";
const CardSong = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  height: 100px;
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
  height: 100vh;
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
export class TelaSongListen extends React.Component {
  state = {
    track: [],
    id: "",
    // playlistName: "",
  };
  handlePlaylistId = (event) => {
    this.setState({ id: event.target.value });
  };
  //   componentDidMount() {
  //     this.detailsPlaylist(); //Mostra os usuários na tela ao abrir a tela sem precisar clicar em um botão
  //   }

  detailsPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`;
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
    // console.log(this.state.track);
    const listaTracks = this.state.track.map((track) => {
      return (
        <CardSong key={track.id}>
          <p>{track.nome}</p>
          <p>{track.artist}</p>
          <audio controls src={track.url} />
        </CardSong>
      );
    });

    return (
      <div>
        <TelaParaAddMusic>
          <button onClick={this.props.irParaCriarPlaylist}>
            Criar nova playlist
          </button>
          <button onClick={this.props.irParaLista}>
            Ir para lista de Playlists
          </button>
          <h2>Ouça uma música</h2>

          <input
            placeholder={"Id da playlist"}
            value={this.state.id}
            onChange={this.handlePlaylistId}
          />
          <button onClick={() => this.detailsPlaylist()}>Ver músicas</button>
          {listaTracks}
        </TelaParaAddMusic>
      </div>
    );
  }
}
