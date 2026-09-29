import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { MeuContext } from "../Context/MeuContext";

import GeneroIcone from "./GeneroIcone";
import Tipos from "./Tipos";
import InformacoesGerais from "./InformacoesGerais";

function DetalhesPokemon() {
  const {pokemon} = useContext(MeuContext);

  const geracoes = {
    "generation-i": "1º Geração",
    "generation-ii": "2º Geração",
    "generation-iii": "3º Geração",
    "generation-iv": "4º Geração",
    "generation-v": "5º Geração",
    "generation-vi": "6º Geração",
    "generation-vii": "7º Geração",
    "generation-viii": "8º Geração",
    "generation-ix": "9º Geração",
  }
  const [regiao, setRegiao] = useState({});

  useEffect(() => {
    const teste = async () => {
      if(pokemon.geracao){
        const apiUrl = await axios.get(`https://pokeapi.co/api/v2/generation/${pokemon.geracao}`);
  
        const resultado = apiUrl.data;

        const novaRegiao = {
          regiaoPrincipal: resultado.main_region.name,
          geracaoTraducao: geracoes[pokemon.geracao]
        } 

        setRegiao(novaRegiao);

      }
    }

    teste();
  }, [pokemon]);

  return (
    <>
      <div className="pokedex-item" style={{display: "flex", gap: 20, alignItems: "center"}}>
        <h2 style={{fontSize: 38, textTransform: "capitalize"}}> {pokemon.nome} </h2>
        <GeneroIcone />
      </div>
      <div className="pokedex-item">
        <h2> Tipo(s) </h2>
        <Tipos />
      </div>
      <div className="pokedex-item">
        <h2> Geração </h2>
        <p> {regiao.geracaoTraducao} </p>
      </div>
      <div className="pokedex-item">
        <h2> Informações Gerais </h2>
        <InformacoesGerais regiao={regiao.regiaoPrincipal} />
      </div>
    </>
  );
}

export default DetalhesPokemon;
