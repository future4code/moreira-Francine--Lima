import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemons, setPokemon] = useState({});

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Componente DidMount
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);
  //Componente DidUpdate
  useEffect(
    () => {
      // if (prevProps !== props.pokemon) {
      //   pegaPokemon(props.pokemon);
      // }
      pegaPokemon(props.pokemon);
    },
    [pokemons]
  );

  return (
    <div>
      <p>{pokemons.name}</p>
      <p>{pokemons.weight} Kg</p>
      {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
      {pokemons.sprites && (
        <img src={pokemons.sprites.front_default} alt={pokemons.name} />
      )}
    </div>
  );
}
