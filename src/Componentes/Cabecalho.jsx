import { useRef, useContext, useState } from "react";

import { MeuContext } from "../Context/MeuContext";

import ConfiguracoesModal from "./ConfiguraçõesModal";

import logo from "../assets/imgs/pokemon_logo.png";

function Cabecalho() {
  const pesquisa = useRef();
  const { setPokemonPesquisa } = useContext(MeuContext);
  

  const pegarValorInput = () => {
    const primeiraLetra = pesquisa.current.value.charAt(0).toLowerCase();
    const resto = pesquisa.current.value.slice(1);
    const pesquisaFormatada = primeiraLetra + resto;

    setPokemonPesquisa( pesquisaFormatada);
  };

  const [modalAberto, setModalAberto] = useState();

  const modal = () => {
    if(!modalAberto){
      setModalAberto(true);
    }else{
      setModalAberto(false);
    }
  };

  return (
    <>
      <header className="cabecalho">
        <img src={logo} alt="Logo" title="Pokemon" />
        <div className="pesquisa-wraper">
          <input type="search" placeholder="Nome ou Pokedex Id" ref={pesquisa} />
          <button title="Pesquisar" onClick={() => pegarValorInput()}> <i className="fa-solid fa-magnifying-glass" /> </button>
        </div>
        <button className="configs-btn" title="Configurações" onClick={() => modal()}> <i className="fa-solid fa-gear" /> </button>
      </header>
      <ConfiguracoesModal modalAberto={modalAberto} />
    </>
  );
}

export default Cabecalho;
