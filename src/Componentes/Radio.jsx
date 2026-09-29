import { useEffect, useRef, useState } from "react";

import capaFireRed from "../assets/imgs/capa_jogos/fire_red.jpg";
import capaEmerald from "../assets/imgs/capa_jogos/emerald.jpg";
import capaPearl from "../assets/imgs/capa_jogos/pearl.jpg";
import capaSoulsilver from "../assets/imgs/capa_jogos/soulsilver.jpg";

import musica1 from "../assets/audios/playlist/Pokémon Fire Red - Route 1 Theme.mp3";
import musica2 from "../assets/audios/playlist/Pokémon Fire Red - S S Anne Theme.mp3";
import musica3 from "../assets/audios/playlist/Pokémon Fire Red - Surf Theme.mp3";
import musica4 from "../assets/audios/playlist/Pokémon Emerald - Title Theme.mp3";
import musica5 from "../assets/audios/playlist/Pokémon Emerald - Route 101 Theme.mp3";
import musica6 from "../assets/audios/playlist/Pokémon Emerald - Surf Theme.mp3";
import musica7 from "../assets/audios/playlist/Pokémon Emerald - Poké Mart Theme.mp3";
import musica8 from "../assets/audios/playlist/Pokémon Pearl - Dawn Theme.mp3";
import musica9 from "../assets/audios/playlist/Pokémon Pearl - Pokémon Center Theme.mp3";
import musica10 from "../assets/audios/playlist/Pokémon Pearl - Poké Mart Theme.mp3";
import musica11 from "../assets/audios/playlist/Pokémon Pearl - Eterna City (Day) Theme.mp3"
import musica12 from "../assets/audios/playlist/Pokémon Soulsilver - Come Along.mp3";
import musica13 from "../assets/audios/playlist/Pokémon Soulsilver - Route 29 Theme.mp3";
import musica14 from "../assets/audios/playlist/Pokémon Soulsilver - National Park Theme.mp3";

function Radio() {
  const [volume, setVolume] = useState(1);

  const alterarVolume = (e) => {
    setVolume(Number(e.target.value));
  };

  const audioRef = useRef()

  useEffect(() => {
    const definirVolume = () => {
      const volumePorcentagem = volume / 100;
      audioRef.current.volume = volumePorcentagem;
    };

    definirVolume();
  }, [volume]);

  const [iconeVolume, setIconeVolume] = useState();

  useEffect(() => {
    const alterarIconeVolume = () => {
      if (volume <= 40  && volume > 0) {
        setIconeVolume("fa-solid fa-volume-low");
      } else if (volume > 40) {
        setIconeVolume("fa-solid fa-volume-high");
      } else {
        setIconeVolume("fa-solid fa-volume-xmark");
      }
    };

    alterarIconeVolume();
  }, [volume]);

  const [tocando, setTocando] = useState(true);

  const playList = [
    {jogo: "Pokémon Fire Red", capa: capaFireRed, musica: "Route 1", arquivo: musica1},
    {jogo: "Pokémon Fire Red", capa: capaFireRed, musica: "S.S. Anne", arquivo: musica2},
    {jogo: "Pokémon Fire Red", capa: capaFireRed, musica: "Surf Theme", arquivo: musica3},
    {jogo: "Pokémon Emerald", capa: capaEmerald, musica: "Title", arquivo: musica4},
    {jogo: "Pokémon Emerald", capa: capaEmerald, musica: "Route 101", arquivo: musica5},
    {jogo: "Pokémon Emerald", capa: capaEmerald, musica: "Surf Theme", arquivo: musica6},
    {jogo: "Pokémon Emerald", capa: capaEmerald, musica: "Poké Mart", arquivo: musica7},
    {jogo: "Pokémon Pearl", capa: capaPearl, musica: "Dawn", arquivo: musica8},
    {jogo: "Pokémon Pearl", capa: capaPearl, musica: "Pokémon Center", arquivo: musica9},
    {jogo: "Pokémon Pearl", capa: capaPearl, musica: "Poké Mart", arquivo: musica10},
    {jogo: "Pokémon Pearl", capa: capaPearl, musica: "Eterna City (Day)", arquivo: musica11},
    {jogo: "Pokémon Soulsilver", capa: capaSoulsilver, musica: "Come Along", arquivo: musica12},
    {jogo: "Pokémon Soulsilver", capa: capaSoulsilver, musica: "Route 29", arquivo: musica13},
    {jogo: "Pokémon Soulsilver", capa: capaSoulsilver, musica: "National Park", arquivo: musica14},
  ];

  const [musicaAtual, steMusicaAtual] = useState(0);

  useEffect(() => {
    const pegarMusica = () => {
      const tamanhoPlaylist = playList.length;
      const idMusica = Math.floor(Math.random() * tamanhoPlaylist);

      if(tocando){
        steMusicaAtual(idMusica);
      }
    };
  
    pegarMusica();
  }, []);
  
  const [tocandoIcone, setTocandoIcone] = useState("fa-solid fa-pause");

  const alterarTocando = () => {
    
  };

  const musicaAnterior = () => {

  };

  const proximaMusica = () => {

  };

  return (
    <>
      <div className="radio-wraper">
        <div className="radio-icone">
          <i className="fa-solid fa-radio"></i>
        </div>
        <div className="radio">
          <img src={playList[musicaAtual].capa} alt="Capa Jogo" />
          <div className="musica-titulo">
            <h2> {playList[musicaAtual].jogo} - {playList[musicaAtual].musica} </h2>
          </div>
          <div className="radio-controles">
            <i className="fa-solid fa-backward-step" title="Voltar"></i>
            <i className={tocandoIcone} title=""></i>
            <i className="fa-solid fa-forward-step" title="Avançar"></i>
          </div>
        </div>
          <audio src={playList[musicaAtual].arquivo} ref={audioRef} autoPlay></audio>
      </div>
    </>
  );
}

export default Radio;
