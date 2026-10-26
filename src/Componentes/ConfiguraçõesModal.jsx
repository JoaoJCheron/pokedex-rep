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

  const {animacoesAtivas, setAnimacoesAtivas} = useContext(MeuContext);
  const pokebolaAnimacaoRef = useRef();
  const interrogacaoAnimacaoRef = useRef();

  const configurarAnimacoes = (animacao) => {
    const animacaoSelecionada = animacao.current.name;

    if(animacoesAtivas[animacaoSelecionada] == true){
      setAnimacoesAtivas(a => ({...a, [animacaoSelecionada]: false}));
    }else{
      setAnimacoesAtivas(a => ({...a, [animacaoSelecionada]: true}));
    }
  
  };

  return (
    <>
      <div className={`modal-wraper ${modalAberto ? "aberto" : ""}`}>
        <h2> Configurar volume do grito </h2>
        <div className="volume">
          <i className={iconeVolume}></i>
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
            <input type="checkbox" name="pokebolaAnimacao" defaultChecked ref={pokebolaAnimacaoRef} onClick={() => configurarAnimacoes(pokebolaAnimacaoRef)}/>
          </div>
          <div className="animacao">
            <label htmlFor="pokemon"> Interrogação: </label>
            <input type="checkbox" name="interrogacaoAnimacao" defaultChecked ref={interrogacaoAnimacaoRef} onClick={() => configurarAnimacoes(interrogacaoAnimacaoRef)}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfiguracoesModal;
