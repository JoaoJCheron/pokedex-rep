import { useContext, useState, useEffect } from "react";
import { MeuContext } from "../Context/MeuContext";

function Tipos() {
  const {pokemon} = useContext(MeuContext);

  const [tipos, setTipos] = useState([]);
  const nomesTipos = {
    ghost: "Fantasma",
    dragon: "Dragão",
    ice: "Gelo",
    fighting: "Lutador",
    electric: "Elétrico",
    rock: "Pedra",
    bug: "Inseto",
    fire: "Fogo",
    grass: "Grama",
    ground: "Terra",
    psychic: "Psíquico",
    flying: "Aéreo",
    normal: "Normal",
    water: "Água",
    poison: "Venenoso",
    steel: "Aço",
    fairy: "Fada",
    dark: "Sombrio",
  };

  useEffect(() => {
    const ajustarTipos = () => {
      if (pokemon.tipo) {
        const novaLista = [];

        for (let i = 0; i < pokemon.tipo.length; i++) {
          novaLista.push({
            tipoNome: pokemon.tipo[i].type.name,
            tipoTraducao: nomesTipos[pokemon.tipo[i].type.name],
          });
        }

        setTipos(novaLista);
      }
    };

    ajustarTipos();
  }, [pokemon]);

  return (
    <>
      <div className="tipos">
        {tipos.map((tipo, index) => (
          <div className={`tipo ${tipo.tipoNome}`} title={`Tipo: ${tipo.tipoTraducao}`} key={index}>
            <h2> {tipo.tipoTraducao} </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tipos;
