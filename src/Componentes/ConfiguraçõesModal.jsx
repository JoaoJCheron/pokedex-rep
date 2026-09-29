import { useContext, useState, useEffect, useRef } from "react";

import { MeuContext } from "../Context/MeuContext";

function ConfiguracoesModal( {modalAberto} ) {
  const { volume, setVolume } = useContext(MeuContext);

  const alterarVolume = (e) => {
    setVolume(Number(e.target.value));
  };

  const [iconeVolume, setIconeVolume] = useState();

  useEffect(() => {
    const definirIconeVolume = () => {
      if (volume <= 40  && volume > 0) {
        setIconeVolume("fa-solid fa-volume-low");
      } else if (volume > 40) {
        setIconeVolume("fa-solid fa-volume-high");
      } else {
        setIconeVolume("fa-solid fa-volume-xmark");
      }
    };

    definirIconeVolume();
  }, [volume]);

  const {mutado, setMutado} = useContext(MeuContext);

  const ligaDesligaVolume = () => {
    
  };

  const pokebolaAnimacaoRef = useRef();
  const pokemonAnimacaoRef = useRef();
  const radioAnimacaoRef = useRef();

  const configurarAnimacoes = () => {
    if(pokebolaAnimacaoRef.current){
      console.log(pokebolaAnimacaoRef.current.checked);
    };

    if(pokemonAnimacaoRef.current){

    };

    if(radioAnimacaoRef.current){

    };
  };

  configurarAnimacoes();

  return (
    <>
      <div className={`modal-wraper ${modalAberto ? "aberto" : ""}`}>
        <h2> Configurar volume do grito </h2>
        <div className="volume">
          <i className={iconeVolume} onClick={() => ligaDesligaVolume()}></i>
          <input
            type="range"
            name="volume"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={alterarVolume}
            title="Alterar volume"
            style={{ "--progresso": `${volume}%` }}
          />
          <label htmlFor="volume"> {volume}% </label>
        </div>
        <h2> Animações </h2>
        <div className="animacoes">
          <div className="animacao">
            <label htmlFor="pokebola"> Pokebola: </label>
            <input type="checkbox" name="pokebola" defaultChecked ref={pokebolaAnimacaoRef} />
          </div>
          <div className="animacao">
            <label htmlFor="pokemon"> Pokemon: </label>
            <input type="checkbox" name="pokemon" defaultChecked ref={pokemonAnimacaoRef} />
          </div>
          <div className="animacao">
            <label htmlFor="radio"> Rádio: </label>
            <input type="checkbox" name="radio" defaultChecked ref={radioAnimacaoRef} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfiguracoesModal;
