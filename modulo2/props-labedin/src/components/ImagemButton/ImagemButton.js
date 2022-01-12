import React from "react";
import "./ImagemButtonStyle.js";
import {
  ImageButtonContainer,
  ImageButtonContainerImg,
} from "./ImagemButtonStyle";
function ImagemButton(props) {
  return (
    <ImageButtonContainer>
      <ImageButtonContainerImg src={props.imagem} />
      <p>{props.texto}</p>
    </ImageButtonContainer>
  );
}

export default ImagemButton;
