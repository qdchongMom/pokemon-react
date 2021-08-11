import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";
import PokemonCard from "./components/PokemonCard";
import PokemonGallery from "./components/PokemonGallery";

const bulbasaur = pokemonData[0];

function App() {
  return (
    <div className="App">
      <PokemonGallery />
    </div>
  );
}

export default App;
