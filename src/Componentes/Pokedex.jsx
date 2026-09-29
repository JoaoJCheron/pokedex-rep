import { useEffect, useContext } from "react";
import axios from "axios";

import DetalhesPokemon from "./DetalhesPokemon";
import DetalhesPokemonPlaceholder from "./DetalhesPokemonPlaceholder";
import Sprite from "./Sprite";

import { MeuContext } from "../Context/MeuContext";

function Pokedex() {
  const { pokemonPesquisa, setPokemon } = useContext(MeuContext);
  const pokemonNI = pokemonPesquisa;

  useEffect(() => {
    const chamarApi = async () => {
      if (pokemonPesquisa) {
        const apiUrl = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNI}`,
        );
        const pokemonInfo = apiUrl.data;

        const especie = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonNI}`,
        );
        const infosAdicionais = especie.data;

        const novoPokemon = {
          id: pokemonInfo.id,
          geracao: infosAdicionais.generation.name,
          eLendario: infosAdicionais.is_legendary,
          nome: pokemonInfo.name,
          tipo: pokemonInfo.types,
          altura: pokemonInfo.height,
          peso: pokemonInfo.weight,
          status: pokemonInfo.stats,
        };

        setPokemon(novoPokemon);
      }
    };

    chamarApi();
  }, [pokemonNI]);

  return (
    <>
      <div className="pokedex-wraper">
        <div className="pokedex">
          {pokemonPesquisa == null ? (
            <DetalhesPokemonPlaceholder />
          ) : (
            <DetalhesPokemon />
          )}
        </div>
        <Sprite />
      </div>
    </>
  );
}

export default Pokedex;
