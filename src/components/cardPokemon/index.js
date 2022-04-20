import React from 'react';
import './style.css';

export function CardPokemon({pokemon}){
    const [img, setImg] = React.useState('./loading.png');

    React.useEffect(() => {
        fetch(pokemon.url)
        .then((response) => response.json())
        .then((json) => setImg(json.sprites.front_default))
        .catch((error) => console.log(error)) 
    }, [pokemon])

    return(
        <div className="cardPokemon">
            <img src={img} alt={pokemon.name}></img>
            <h2>{pokemon.name}</h2>
        </div>
    )
}