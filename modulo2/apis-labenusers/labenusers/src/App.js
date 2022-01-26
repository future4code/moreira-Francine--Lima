import React from "react";
import axios from "axios";
import styled from "styled-components";
// const urlDelete =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}`;
const Page = styled.div`
  background-color: saddlebrown;
`;
const urlAddEGet =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = { headers: { Authorization: "francine-lima-moreira" } };
class App extends React.Component {
  state = {
    userList: [],
    inputName: "",
    inputEmail: "",
    telaUm: false,
  };

  componentDidUpdate() {
    this.getAllUsers();
  }
  componentDidMount() {
    this.getAllUsers();
  }
  onClickTrocarTela = () => {
    this.setState({ telaUm: !this.state.telaUm });
  };

  deleteUser = (userID) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}`,
        headers
      )
      .then((res) => {
        // console.log(res.data);
        //  return this.setState({ userList: res.data });
        //Não precisa setar o estado pois eu so vou receber a atualização da lista
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  getAllUsers = () => {
    axios

      .get(urlAddEGet, headers)

      .then((res) => {
        this.setState({ userList: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  creatUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    axios
      .post(urlAddEGet, body, headers)
      .then((res) => {
        alert(`O usuário ${this.state.inputName} foi criado com sucesso!`);
        this.setState({ inputEmail: "", inputName: "" });
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ inputEmail: "", inputName: "" });
      });
  };
  onUserlistNameChange = (event) => {
    this.setState({ inputName: event.target.value });
  };
  onUserlistEmailChange = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  //  <li key={user.id}>{user.id}</li>;
  render() {
    const ReceivedUserList = this.state.userList.map((user) => {
      return (
        <div>
          <li key={user.id}>{user.name}</li>
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </div>
      );
    });
    // console.log(this.state.userList);
    return (
      <div>
        <div>
          <button onClick={this.onClickTrocarTela}>Trocar tela</button>
        </div>
        <div>
          {this.state.telaUm ? (
            ReceivedUserList
          ) : (
            <div>
              <input
                value={this.state.inputName}
                onChange={this.onUserlistNameChange}
                placeholder="Nome"
              />
              <input
                value={this.state.inputEmail}
                onChange={this.onUserlistEmailChange}
                placeholder="Email"
              />

              <button onClick={this.creatUser}>Criar novo Usuario</button>
            </div>
          )}

          {/* <ul>{ReceivedUserList}</ul> */}
        </div>
      </div>
    );
  }
}

export default App;
