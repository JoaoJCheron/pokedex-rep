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

function DetalhesPokemonPlaceholder() {
  return (
    <>
      <div className="pokedex-item" style={{display: "flex", gap: 20, alignItems: "center"}}>
        <h2> Quem é esse Pokémon? </h2>
      </div>
      <div className="pokedex-item">
        <h2> Tipo(s) </h2>
        <div className="tipos">
          <div className="tipo" title="???">
            <h2> ??? </h2>
          </div>
          <div className="tipo" title="???">
            <h2> ??? </h2>
          </div>
          <div className="tipo" title="???">
            <h2> ??? </h2>
          </div>
        </div>
      </div>
      <div className="pokedex-item">
        <h2> Geração </h2>
        <p> ??? </p>
      </div>
      <div className="pokedex-item">
        <h2> Informações Gerais </h2>
        <div className="infos">
          <div className="info" title="Pokedex Id">
            <img src={pokedexIdIcon} alt="Pokedex Id" />
            <p> Nº ??? </p>
          </div>
          <div className="info" title="Região">
            <img src={regionIcon} alt="Regiao" />
            <p> ??? </p>
          </div>
          <div className="info" title="Altura">
            <img src={heightIcon} alt="Altura" />
            <p> ??? Metro(s) </p>
          </div>
          <div className="info" title="Peso">
            <img src={weightIcon} alt="Peso" />
            <p> ??? Kg(s) </p>
          </div>
          <div className="info" title="HP">
            <img src={hpIcon} alt="HP" />
            <p> ??? Pts </p>
          </div>
          <div className="info" title="Ataque">
            <img src={attackIcon} alt="Ataque" />
            <p> ??? Pts </p>
          </div>
          <div className="info" title="Defesa">
            <img src={defenseIcon} alt="Defesa" />
            <p> ??? Pts </p>
          </div>
          <div className="info" title="Ataque Esp.">
            <img src={specialattackIcon} alt="Ataque Esp." />
            <p> ??? Pts </p>
          </div>
          <div className="info" title="Defesa Esp.">
            <img src={specialdefenseIcon} alt="Defesa Esp." />
            <p> ??? Pts </p>
          </div>
          <div className="info" title="Velocidade">
            <img src={speedIcon} alt="Velocidade" />
            <p> ??? Pts </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalhesPokemonPlaceholder;
