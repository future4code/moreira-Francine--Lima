import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
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
const Page = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  button {
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  h2 {
    color: brown;
  }
`;
export class TelaDetailsMusic extends React.Component {
  state = {
    playlistsPorNome: [],
    playlistDetails: [],
    nome: "",
  };

  //   componentDidMount() {
  //     this.pegarPlaylistsPorNome(); //Mostra os usuários na tela ao abrir a tela sem precisar clicar em um botão
  //   }
  //   //   componentDidUpdate() {
  //     this.pegarUsuarios(); //Atualiza a tela quando eu deleto o usuário, pegando a lista de novo e deletando o usuário imediatamente
  //   }

  handlePlaylistName = (event) => {
    this.setState({ nome: event.target.value });
  };

  pegarPlaylistsPorNome = () => {
    console.log(this.state); //Ver se realmente estou pegando os usuarios
    const url = ` https: //us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?${this.state.nome}=string`;
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlistsPorNome: res.data });
        console.log([res]); //Ver os dados no console
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);

        // alert(
        //   "Ocorreu um problema, pode ser que você não esteja conectado a internet, tente novamente mais tarde."
        // );
      });
  };

  //   deletarPlaylist = (id) => {
  //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
  //     const headers = { headers: { Authorization: "francine-lima-moreira" } };

  //     axios
  //       .delete(url, headers)
  //       .then((res) => {
  //         // console.log(res);
  //         alert("Usuário deletado com sucesso");
  //         this.pegarPlaylists(); //fazendo o mesmo do did update mas de outra forma, pegando os usuarios de novo apos o deletar.
  //       })
  //       .catch((err) => {
  //         // console.log(err);
  //         alert("Ocorreu um erro tente novamente mais tarde");
  //       });
  //   };

  detailsPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data.result.tracks);
        this.setState({ playlistDetails: res.data.result.tracks });
        this.detailsPlaylist(); //fazendo o mesmo do did update mas de outra forma, pegando os usuarios de novo apos o deletar.
      })
      .catch((err) => {
        console.log(err);
        // alert("Ocorreu um erro tente novamente mais tarde");
      });
  };
  render() {
    console.log(this.state.listaPlaylistsDetails); //Ver array de usuarios antes de dar o map
    const listaPlaylists = this.state.playlistsPorNome.map((playlist) => {
      return (
        <CardUsuario key={playlist.name}>
          <p>{playlist.name}</p>
          <p>{playlist.id}</p>
          <button onClick={() => this.deletarPlaylist(playlist.id)}>
            Deletar
          </button>
          <button onClick={() => this.detailsPlaylist(playlist.id)}>
            Ver mais detalhes
          </button>
        </CardUsuario>
      );
    });

    const listaPlaylistsDetails = this.state.playlistDetails.map((playlist) => {
      return (
        <CardUsuario key={playlist.id}>
          <p>{playlist.name}</p>
          <p>{playlist.artist}</p>
          <audio controls src={playlist.url} />
        </CardUsuario>
      );
    });
    return (
      <div>
        <Page>
          <button onClick={this.props.irParaCriarPlaylist}>
            Voltar para criar playlist
          </button>
          <div>
            <input
              placeholder={"Nome da playlist"}
              value={this.state.nome}
              onChange={this.handlePlaylistName}
            />
            <button onClick={this.pegarPlaylistsPorNome}>Procurar</button>
          </div>
          <div>
            <h2>Playlists</h2>
          </div>
        </Page>
        {listaPlaylists}
        {listaPlaylistsDetails}
      </div>
    );
  }
}
//
