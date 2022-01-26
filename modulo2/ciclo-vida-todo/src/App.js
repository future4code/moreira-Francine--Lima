import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "programar",
        completa: false, //LOGO A TAREFA ESTÁ INCOMPLETA
      },
      {
        id: Date.now() + 1,
        texto: "comer",
        completa: true, //LOGO A TAREFA ESTÁ INCOMPLETA
      },
    ],
    inputValue: "",
    filtro: "",
  };
  // salvarLocalStorage = () => {
  //   localStorage.setItem("texto", JSON.stringify(this.state.inputValue));
  // };
  // searchLocalStorage = () => {
  //   const tarefinhas = localStorage.getItem("texto");
  //   this.setState({
  //     texto: tarefinhas || "",
  //   });
  // };
  // componentDidUpdate() {
  //   this.salvarLocalStorage();
  // }

  // componentDidMount() {
  //   this.searchLocalStorage();
  // }

  componentDidUpdate() {
    const tarefinhaz = this.state.tarefas;
    localStorage.setItem("texto", JSON.stringify(tarefinhaz));

    // console.log("Salvou");
  }

  componentDidMount() {
    if (localStorage.getItem("texto")) {
      const tarefasLocalStorage = localStorage.getItem("texto");
      const tarefasObj = JSON.parse(tarefasLocalStorage);

      this.setState({
        tarefas: tarefasObj,
      });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    //Ao printar texto na tela passos
    //1- Crie um objeto igual ao do estado e salve numa variavel

    const novasTarefas = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
      //  A TAREFA COMEÇA SEMPRE COMO INCOMPLETA
    };

    //2- Faça uma cópia do estado para ser usada no map do render
    const novasTarefasRender = [...this.state.tarefas, novasTarefas];
    //3-setar o estado para definir o que aparecera na tela ou seja meu novo valor da minha key do objeto
    this.setState({ tarefas: novasTarefasRender });

    //   3-Zerando o input apos clicar
    this.setState({ tarefas: novasTarefasRender, inputValue: "" });
  };

  selectTarefa = (id) => {
    const novasTarefasRender1 = this.state.tarefas.map((item) => {
      if (item.id === id) {
        const novasTarefas1 = {
          ...item,
          completa: !item.completa,
        };
        return novasTarefas1;
      } else {
        return item;
      }
    });
    this.setState({ tarefas: novasTarefasRender1 });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
