import IframeHeader from "./IframeHeader/IframeHeader";
import AboutBet from "./AboutBet/AboutBet";
import "./Aviator.scss";

const Aviator = () => {
  return (
    <div className="aviator_demo_container">
      <IframeHeader />
      <div className="aviator_game_container">
        <div className="game_info_container">
          <AboutBet />
        </div>
        <div className="game_container"></div>
      </div>
    </div>
  );
};

export default Aviator;
