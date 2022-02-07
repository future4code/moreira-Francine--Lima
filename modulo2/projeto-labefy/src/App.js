import React from "react";
import { TelaAddMusic } from "./components/TelaAddMusic";
import { TelaAddPlaylist } from "./components/TelaAddPlaylists";
// import { TelaDetailsMusic } from "./components/TelaDetailsMusic";
import { TelaDetailsPlaylists } from "./components/TelaDetailsPlaylists";
import { TelaListaPlaylists } from "./components/TelaListaPlaylists";
import { TelaSongListen } from "./components/TelaSongListen";

class App extends React.Component {
  state = {
    telaAtual: "addPlaylist",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "addPlaylist":
        return (
          <TelaAddPlaylist
            irParaAddMusic={this.irParaAddMusic}
            irParaLista={this.irParaLista}
            irParaTocarMusica={this.irParaTocarMusica}
            // irParaAddDetails={this.irParaAddDetails}
          />
        );
      case "listaDePlaylists":
        return (
          <TelaListaPlaylists
            // irParaAddDetails={this.irParaAddDetails}
            irParaCriarPlaylist={this.irParaCriarPlaylist}
            irParaTocarMusica={this.irParaTocarMusica}
            irParaDetalhesPlaylists={this.irParaDetalhesPlaylists}
          />
        );
      case "addMusic":
        return (
          <TelaAddMusic
            irParaLista={this.irParaLista}
            irParaAddMusic={this.irParaAddMusic}
            irParaCriarPlaylist={this.irParaCriarPlaylist}
          />
        );
      case "playing":
        return (
          <TelaSongListen
            irParaCriarPlaylist={this.irParaCriarPlaylist}
            irParaTocarMusica={this.irParaTocarMusica}
            irParaLista={this.irParaLista}
          />
        );
      case "detalhes":
        return <TelaDetailsPlaylists irParaLista={this.irParaLista} />;
      default:
        return <div>Pagina não encontrada</div>;
    }
  };
  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "addPlaylist" });
  };
  irParaLista = () => {
    this.setState({ telaAtual: "listaDePlaylists" });
  };
  irParaAddMusic = () => {
    this.setState({ telaAtual: "addMusic" });
  };

  irParaTocarMusica = () => {
    this.setState({ telaAtual: "playing" });
  };
  irParaDetalhesPlaylists = () => {
    this.setState({ telaAtual: "detalhes" });
  };
  render() {
    return <div>{this.escolheTela()}</div>;
  }
}

export default App;
