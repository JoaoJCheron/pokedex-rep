import { useContext, useState, useEffect } from "react";

import { MeuContext } from "../Context/MeuContext";

import pokedexIdIcon from "../assets/imgs/stats_icons/pokedex_id_icon.png";
import regionIcon from "../assets/imgs/stats_icons/regiao_icon.png";
import heightIcon from "../assets/imgs/stats_icons/altura_icon.png";
import weightIcon from "../assets/imgs/stats_icons/peso_icon.png";
import hpIcon from "../assets/imgs/stats_icons/hp_icon.png";
import attackIcon from "../assets/imgs/stats_icons/atq_icon.png";
import defenseIcon from "../assets/imgs/stats_icons/defesa_icon.png";
import specialattackIcon from "../assets/imgs/stats_icons/atq_esp_icon.png";
import specialdefenseIcon from "../assets/imgs/stats_icons/defesa_esp_icon.png";
import speedIcon from "../assets/imgs/stats_icons/velocidade_icon.png";

function InformacoesGerais( {regiao} ) {
  const {pokemon} = useContext(MeuContext);

  const [stats, setStats] = useState([]);
  const nomesStats = {
    pokedexId: "Id da Pokedex",
    main_region: "Região",
    height: "Altura",
    weight: "Peso",
    hp: "Hp",
    attack: "Ataque",
    defense: "Defesa",
    "special-attack": "Ataque Esp.",
    "special-defense": "Defesa Esp.",
    speed: "Velocidade",
  };
  const imgsStats = {
    pokedexId: pokedexIdIcon,
    main_region: regionIcon,
    height: heightIcon,
    weight: heightIcon,
    hp: hpIcon,
    attack: attackIcon,
    defense: defenseIcon,
    "special-attack": specialattackIcon,
    "special-defense": specialdefenseIcon,
    speed: speedIcon,
  };

  useEffect(() => {
    const ajustarStats = () => {
      if (pokemon.status) {
        const metros = Number(pokemon.altura) * 0.3048;
        const kgs = Number(pokemon.peso) / 2.20462;
        
        const novaLista = [
          {
            statNome: "pokedexId",
            statValor: pokemon.id,
            statTraducao: nomesStats.pokedexId,
            statImg: pokedexIdIcon,
            statComplemento: "Nº",
          },
          {
            statNome: "main_region",
            statValor: regiao,
            statTraducao: nomesStats.main_region,
            statImg: regionIcon,
            statComplemento: "",
          },
          {
            statNome: "height",
            statValor: metros.toFixed(2),
            statTraducao: nomesStats.height,
            statImg: heightIcon,
            statComplemento: "M(s)",
          },
          {
            statNome: "weight",
            statValor: kgs.toFixed(2),
            statTraducao: nomesStats.weight,
            statImg: weightIcon,
            statComplemento: kgs > 1000 ? "Toneladas" : "Kg(s)",
          },
        ];

        for (let i = 0; i < pokemon.status.length; i++) {
          novaLista.push({
            statNome: pokemon.status[i].stat.name,
            statValor: pokemon.status[i].base_stat,
            statTraducao: nomesStats[pokemon.status[i].stat.name],
            statImg: imgsStats[pokemon.status[i].stat.name],
            statComplemento: "Pts",
          });
        }

        setStats(novaLista);
      }
    };

    ajustarStats();
  }, [pokemon, regiao]);

  return (
    <>
      <div className="infos">
        {stats.map((stat, index) => (
          <div className="info" title={stat.statTraducao} key={index}>
            <img src={stat.statImg} alt={stat.statTraducao} />
            {stat.statNome == "pokedexId" ? (
              <p> {stat.statComplemento} {stat.statValor} </p>
            ) : (
              <p> {stat.statValor} {stat.statComplemento} </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default InformacoesGerais;
