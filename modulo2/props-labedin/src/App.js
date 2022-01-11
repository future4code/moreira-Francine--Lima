import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno.js/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import foto from "./img/foto.JPG";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h1>Dados pessoais</h1>
        <CardGrande
          imagem={foto}
          nome="Francine"
          descricao="Oi, eu sou Francine, tenho 31 anos e moro em Salvador.
           Sou estudante da Labenu e estou aprendendo mais sobre Front e Backend."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contatos</h2>
        <CardPequeno
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Email"
          descricao="blablabla@gmail.com"
        />

        <CardPequeno
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Endereço"
          descricao="Rua dos bobos número 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Frontend"
          descricao="Freelancer de Frontend para empresas."
        />

        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Estágio"
          descricao="Estágio na Labenu! :)"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}
export default App;
