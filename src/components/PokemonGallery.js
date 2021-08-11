import React from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../pokemon/pokemon";
import "./PokemonGallery.css";

function PokemonGallery() {
  return (
    <div className="galleryParent">
      {pokemonData.map((currPokemon) => (
        <PokemonCard pokemon={currPokemon}></PokemonCard>
      ))}
    </div>
  );
}
export default PokemonGallery;
