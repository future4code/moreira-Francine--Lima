import React from "react";
import axios from "axios";
import styled from "styled-components";
const TelaCadastros = styled.div`
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
export class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };
  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    const headers = { headers: { Authorization: "francine-lima-moreira" } };
    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res); //ver o console com a resposta
        alert(`O usuário ${this.state.nome} foi criado com sucesso!`);
        this.setState({ nome: "", email: "" }); //Limpando o input
        // this.getAllUsers();
      })
      .catch((err) => {
        console.log(err.response.data); //ver o console com o erro todo
        console.log(err); //ver o console com o erro
        alert(err.response.data.message);
        this.setState({ nome: "", email: "" }); //Limpando o input
      });
    console.log(this.state); //Ver se está guardando o nome e email ao clicar
  };

  render() {
    return (
      <div>
        <TelaCadastros>
          <button onClick={this.props.irParaLista}>
            Ir para lista de usuários
          </button>
          <h2>Cadastro</h2>
          <input
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <input
            placeholder={"E-mail"}
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <button onClick={this.fazerCadastro}>Cadastrar</button>
        </TelaCadastros>
      </div>
    );
  }
}
