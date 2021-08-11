import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="pokecard">
      <img
        className="img-pokemon"
        src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
        alt="pokemon"
      />
      <div className="pokename">
        <h1>{name.english}</h1>
      </div>

      <div className="type">
        {type.map((type) => (
          <span className={`type1 ${type.toLowerCase()}`}>{type}</span>
        ))}
      </div>
      <div className="pokestats">
        <div>HP: {base.HP}</div>
        <div>Attack: {base.Attack}</div>
        <div>Defence: {base.Defence}</div>
        <div>SpAttack: {base.SpAttack}</div>
        <div>SpDefence: {base.SpDefence}</div>
        <div>Speed: {base.Speed}</div>
      </div>
    </div>
  );
}

export default PokemonCard;
