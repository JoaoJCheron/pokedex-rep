import { useState } from "react";

import Cabecalho from "./Componentes/Cabecalho";
import Pokedex from "./Componentes/Pokedex";
import Radio from "./Componentes/Radio";

import { MeuContext } from "./Context/MeuContext";

function App() {
  const [pokemonPesquisa, setPokemonPesquisa] = useState();
  const [pokemon, setPokemon] = useState({});

  const [volume, setVolume] = useState(20);
  const [mutado, setMutado] = useState(false);

  return (
    <>
      <MeuContext.Provider
        value={{
          pokemonPesquisa,
          setPokemonPesquisa,
          pokemon,
          setPokemon,
          volume,
          setVolume,
          mutado,
          setMutado,
        }}
      >
        <Cabecalho />
        <Pokedex />
        <Radio />
      </MeuContext.Provider>
    </>
  );
}

export default App;
