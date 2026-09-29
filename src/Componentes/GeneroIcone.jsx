import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { MeuContext } from "../Context/MeuContext";

import lendarioIcon from "../assets/imgs/lendario_icon.png";

function GeneroIcone() {
  const {pokemon} = useContext(MeuContext);

  const [genero, setGenero] = useState(0);

  useEffect(() => {
    const setarGenero = async () => {
      const generoNum = 3;
      const apiUrl = await axios.get(`https://pokeapi.co/api/v2/gender/${generoNum}`);
      const generoInfo = apiUrl.data.pokemon_species_details;

      for(let i = 0;i < generoInfo.length;i ++){
        if(pokemon.nome == generoInfo[i].pokemon_species.name){
          setGenero(3);
          break;
        }else{
          const numAleatorio = Math.floor(Math.random() * 2);
    
          setGenero(numAleatorio);
        }
      }
    }

    setarGenero();
  }, [pokemon]);

  const indice = genero == 3 ? genero - 1 : genero;
  const iconeInfos = [
    {
      classe: "fa-solid fa-mars",
      cor: "#1E90FF",
      titulo: "Macho",
    },
    {
      classe: "fa-solid fa-venus",
      cor: "#FF1493",
      titulo: "Fêmea",
    },
    {
      classe: "fa-solid fa-neuter",
      cor: "#1e3050",
      titulo: "Sem Gênero",
    },
  ];

  return (
    <>
      {pokemon.eLendario ? (
        <>
          <div className="genero" style={{ backgroundColor: iconeInfos[indice].cor }} title={iconeInfos[indice].titulo}>
            <i className={iconeInfos[indice].classe}></i>
          </div>
          <div className="genero" style={{ padding: "2px 4px", backgroundColor: "#565163" }} title="Lendário">
            <img src={lendarioIcon} alt="Icone Lendário" />
          </div>
        </>
      ) : (
        <div className="genero" style={{ backgroundColor: iconeInfos[indice].cor }}>
          <i className={iconeInfos[indice].classe}title={iconeInfos[indice].titulo}></i>
        </div>
      )}
    </>
  );
}

export default GeneroIcone;
