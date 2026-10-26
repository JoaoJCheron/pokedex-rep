import { useState, useContext, useRef, useEffect } from "react";

import { MeuContext } from "../Context/MeuContext";

import pokebola from "../assets/imgs/pokebola.png";
import interrogacao from "../assets/imgs/interrogacao.png";
import shiny from "../assets/imgs/shiny_icon.png";

function Sprite() {
  const {pokemon} = useContext(MeuContext);

  const sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const spriteShiny = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

  const cry = "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/";

  const [sprAtual, setSprAtual] = useState("padrão");

  const alterarSpr = () => {
    if(sprAtual == "padrão"){
      setSprAtual("shiny");
    }else{
      setSprAtual("padrão");
    }
  }

  const {volume} = useContext(MeuContext);
  const audioRef = useRef();
  
  useEffect(() => {
    const definirVolume = () => {
      const volumePorcentagem = volume / 100;
      
      if(audioRef.current){
        audioRef.current.volume = volumePorcentagem;
      }
    };
  
    definirVolume();
  }, [volume, pokemon]);

  const {animacoesAtivas} = useContext(MeuContext);

  return (
    <>
      <div className="sprite-wraper">
        {pokemon.id == null ? (
          <div className="sprite">
            <img src={pokebola} alt="Sprite Pokebola" className={`pokebola-img ${animacoesAtivas.pokebolaAnimacao ? "animado" : ""}`} />
            <img src={interrogacao} alt="Sprite Interrogação" className={`interrogacao-img ${animacoesAtivas.interrogacaoAnimacao ? "animado" : ""}`} />
          </div>
        ) : (
          <div className="sprite">
            {sprAtual == "padrão" ? (
              <img className={`${animacoesAtivas.pokemonAnimacao ? "animado" : ""}`} src={`${sprite}${pokemon.id}.png`} alt="Sprite Pokemon"></img>
            ) : (
              <img src={`${spriteShiny}${pokemon.id}.png`} alt="Sprite Pokemon Shiny"></img>
            )}
            <audio src={`${cry}${pokemon.id}.ogg`} ref={audioRef} autoPlay></audio>
            <div className="sprite-controles">
              <button className="spr-btn" title="Alterar Spr" onClick={() => alterarSpr()}>
                <img src={shiny} alt="Shiny Icon" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sprite;
