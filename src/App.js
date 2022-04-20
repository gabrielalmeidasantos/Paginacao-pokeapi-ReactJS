import React from "react";
import { Container } from "./components/container";
import { Pokemons } from "./components/pokemons";
import { Nav } from "./components/nav";

function App() {
    const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemons, setPokemons] = React.useState([]);

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setPokemons(json))
            .catch((err) => console.log(err));
    }, [url]);

    return (
        <Container>
            {pokemons.length !== 0 && (
                <>
                    <Nav setUrl={setUrl} anterior={pokemons.previous} proximo={pokemons.next} />
                    <Pokemons pokemons={pokemons}/>
                </>
            )}
        </Container>
    );
}

export default App;
