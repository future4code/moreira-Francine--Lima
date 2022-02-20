import axios from "axios";
import useForm from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { postUrl } from "../constants/constants";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import Header from "../Header/Header";
import styled from "styled-components";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  h1 {
    font-size: 30px;
  }
`;
const ContainerForm = styled.form`
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  select {
    font-size: 14px;
    font-family: monospace;
    font-weight: lighter;
    align-self: start;
    border-radius: 5px;
    outline: none;
    width: 300px;
    max-width: 350px;
    transition: padding 0.3s 0.2s ease;
  }
  p {
    align-self: flex-start;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
  margin: 20px;
  button {
    font-size: 16px;
    letter-spacing: 2px;
    color: #31322e;
    cursor: pointer;
    border: 3px solid;
    margin: 20px;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;
  }
`;
function CreateTrip(props) {
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  useProtectedPage();

  // ("0" + getDate()).slice(-2) date
  //("0" + (this.getMonth() + 1)).slice(-2) month
  let dateToday = new Date();
  let stringDate =
    dateToday.getFullYear() +
    "-" +
    ("0" + (dateToday.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dateToday.getDate()).slice(-2);

  //Router
  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };
  const onSend = (e) => {
    e.preventDefault();
    clearForm();
  };

  const createTrip = () => {
    const body = form;
    const token = localStorage.getItem("token");
    axios
      .post(postUrl, body, {
        headers: {
          auth: token,
          Authorization: "Content-Type: application/json",
        },
      })
      .then((res) => {
        alert(`Viagem criada com sucesso ${"\u2728"}`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <PageContainer>
        <h1>Crie uma viagem</h1>
        <ContainerForm onSubmit={onSend}>
          <p>Nome da viagem</p>
          <input
            value={form.name}
            onChange={onChangeForm}
            type="text"
            placeholder="Nome"
            name={"name"}
            pattern={"^.{5,}$"}
            title="O nome da viagem deve conter mais que cinco caracteres."
            required
          />
          <p>Descrição</p>
          <input
            value={form.description}
            onChange={onChangeForm}
            type="text"
            placeholder="Descrição"
            name={"description"}
            pattern={"^.{30,}$"}
            title="O nome da viagem deve conter mais que trinta caracteres."
            required
          />

          <p>Escolha um planeta </p>
          <select
            name={"planet"}
            value={form.planet}
            onChange={onChangeForm}
            required
          >
            <option value="Marte">Marte</option>
            <option value="Vênus">Vênus</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Terra">Terra</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Netuno"> Netuno</option>
          </select>

          <p>Escolha uma data </p>
          <input
            type="date"
            value={form.date}
            name={"date"}
            onChange={onChangeForm}
            required
            min={stringDate}
          />

          <p>Duração da viagem </p>
          <input
            type="number"
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChangeForm}
            min={50}
            title="O nome da viagem deve conter mais que 50 dias."
            required
          />

          <ButtonContainer>
            <button onClick={goToAdminHome}>Voltar</button>
            <button onClick={createTrip}>Enviar</button>
          </ButtonContainer>
        </ContainerForm>
      </PageContainer>
    </div>
  );
}

export default CreateTrip;
