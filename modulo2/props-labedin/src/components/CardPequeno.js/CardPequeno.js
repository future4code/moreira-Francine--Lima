import React from "react";

import "./CardPequenoStyle";
import { SmallCardContainer, ImagenP, NomeP } from "./CardPequenoStyle";

function CardPequeno(props) {
  return (
    <SmallCardContainer>
      <ImagenP src={props.imagem} />
      <div>
        <NomeP>{props.nome}</NomeP>
        <p>{props.descricao}</p>
      </div>
    </SmallCardContainer>
  );
}

export default CardPequeno;
