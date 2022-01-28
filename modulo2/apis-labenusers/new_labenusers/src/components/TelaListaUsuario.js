import React from "react";
import axios from "axios";
import styled from "styled-components";
// const Botao = styled.button`
//   color: brown;
//   border: 1px solid rosybrown;
//   border-radius: 30px;
//   padding: 8px;
//   margin: 8px;
//   display: flex;

// `;
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
export class TelaListaUsuario extends React.Component {
  state = {
    usuarios: [],
  };
  componentDidMount() {
    this.pegarUsuarios(); //Mostra os usuários na tela ao abrir a tela sem precisar clicar em um botão
  }
  //   componentDidUpdate() {
  //     this.pegarUsuarios(); //Atualiza a tela quando eu deleto o usuário, pegando a lista de novo e deletando o usuário imediatamente
  //   }

  pegarUsuarios = () => {
    // console.log(this.state); //Ver se realmente estou pegando os usuarios
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ usuarios: res.data });
        // console.log(res.data); //Ver os dados no console
      })
      .catch((err) => {
        alert(
          "Ocorreu um problema, pode ser que você não esteja conectado a internet, tente novamente mais tarde."
        );
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .delete(url, headers)
      .then((res) => {
        // console.log(res);
        alert("Usuário deletado com sucesso");
        this.pegarUsuarios(); //fazendo o mesmo do did update mas de outra forma, pegando os usuarios de novo apos o deletar.
      })
      .catch((err) => {
        // console.log(err);
        alert("Ocorreu um erro tente novamente mais tarde");
      });
  };
  render() {
    // console.log(this.state.usuarios); //Ver array de usuarios antes de dar o map
    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => this.deletarUsuario(user.id)}>Deletar</button>
        </CardUsuario>
      );
    });
    return (
      <div>
        <div></div>
        <Page>
          <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
          <div>
            <h2>Lista de usuários</h2>
          </div>
        </Page>
        {listaUsuarios}
      </div>
    );
  }
}
