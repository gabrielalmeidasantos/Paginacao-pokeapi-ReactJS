import React from "react";
import "./style.css";
import { CardPokemon } from "../cardPokemon";

export function Pokemons({ pokemons }) {
    return (
        <div className="pokemons">
            {pokemons.results.map((pokemon) => (
                <CardPokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
}
