import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Cards from "../Utils/cards";
import King from "../assets/king.png";
import Backside from "../assets/playing-card.png";
import Seven from "../assets/suit.png";
import Ace from "../assets/ace.png";
import "../CSS/index.css";


function Dealing() {
    const [showDealerCard, setShowDealerCard] = useState(false);
  
    const handleDeal = () => {
      setShowDealerCard(true);
    };
  
    return (
      <div className="home-background">
        <NavBar />
        <div id="dealing-content">
          <ol>
            <li className="steps">
              Both the dealer and player(s) are dealt two cards, but the dealer only shows one card while the other is kept face down.
              <br />
              <span style={{ textDecoration: "underline" }}>The player always goes first</span>
              <div className="dealing-demo">
                <div id="dealer">
                  <span className="dealer-label">Dealer</span>
                  <div className={`dealing-cards ${showDealerCard ? 'card-flip' : ''}`}>
                    <div className="card-front">
                      <Cards image={King} number="K" width="60px" height="92px" fontSize="1em" />
                    </div>
                    <div className="card-back">
                      <Cards image={Backside} number="" width="60px" height="92px" fontSize="1em" />
                    </div>
                  </div>
                  <div className={`dealing-cards ${showDealerCard ? 'card-flip' : ''}`}>
                    <div className="card-front">
                      <Cards image={Ace} number="A" width="60px" height="92px" fontSize="1em" />
                    </div>
                    <div className="card-back">
                      <Cards image={Backside} number="" width="60px" height="92px" fontSize="1em" />
                    </div>
                  </div>
                </div>
                <div id="player">
                  <span className="player-label">Player</span>
                  <Cards className="dealing-cards" image={Seven} number="7" width="60px" height="92px" fontSize="1em" />
                  <Cards className="dealing-cards" image={Ace} number="A" width="60px" height="92px" fontSize="1em" />
                </div>
              </div>
            </li>
          </ol>
          <button onClick={handleDeal} className="deal-button">Deal</button>
        </div>
      </div>
    );
  }
  
  export default Dealing;