import { useState } from "react";

import Cabecalho from "./Componentes/Cabecalho";
import Pokedex from "./Componentes/Pokedex";

import { MeuContext } from "./Context/MeuContext";

function App() {
  const [pokemonPesquisa, setPokemonPesquisa] = useState();
  const [pokemon, setPokemon] = useState({});

  const [volume, setVolume] = useState(20);

  const [animacoesAtivas, setAnimacoesAtivas] = useState({
    pokebolaAnimacao: true,
    interrogacaoAnimacao: true,
  });

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
          animacoesAtivas,
          setAnimacoesAtivas,
        }}
      >
        <Cabecalho />
        <Pokedex />
      </MeuContext.Provider>
    </>
  );
}

export default App;
