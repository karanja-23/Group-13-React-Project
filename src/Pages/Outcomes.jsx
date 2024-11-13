
import React from "react";
import NavBar from "../Components/NavBar";

function Outcomes() {
  return (
    <div className="home-background">
      <NavBar />
      <div className="outcomes-content">
        <h1>Blackjack Game Outcomes</h1>
        <p>In Blackjack, there are several possible outcomes based on the player's hand and the dealer's hand. Here are the most common outcomes:</p>

        <div className="outcome-card">
          <h2>1. Win</h2>
          <p>
            You win when the value of your hand is closer to 21 than the dealer's hand without exceeding 21.
            You can also win if the dealer busts (exceeds 21).
          </p>
        </div>

        <div className="outcome-card">
          <h2>2. Blackjack</h2>
          <p>
            If your initial two cards are an Ace and a 10-point card (10, Jack, Queen, or King), you have a "Blackjack."
            This is the best hand possible and usually pays out 3:2.
          </p>
        </div>

        <div className="outcome-card">
          <h2>3. Lose</h2>
          <p>
            You lose if the value of your hand exceeds 21 (a bust), or if the dealer's hand is closer to 21 than yours.
          </p>
        </div>

        <div className="outcome-card">
          <h2>4. Tie (Push)</h2>
          <p>
            A tie (or "push") occurs when your hand and the dealer's hand have the same total value, neither hand winning.
            In this case, your bet is returned to you.
          </p>
        </div>

        <div className="outcome-card">
          <h2>5. Bust</h2>
          <p>
            You "bust" if the value of your hand exceeds 21. This results in an automatic loss, regardless of the dealer's hand.
          </p>
        </div>

        <div className="outcome-card">
          <h2>6. Dealer Bust</h2>
          <p>
            If the dealer's hand exceeds 21 (bust), all remaining players win, as long as they haven’t bust themselves.
          </p>
        </div>

        <div className="outcome-card">
          <h2>Example Scenario</h2>
          <p>
            Imagine you have a hand consisting of a 10 and a 7 (17 points). The dealer has a King showing, with a hidden card. 
            The dealer then draws a 10 (making their hand 20). In this scenario, you lose, since the dealer's hand is closer to 21.
            However, if the dealer had bust by drawing too high (say, a total of 22), you would have won.
          </p>
        </div>
      </div>
    </div>
  );



export default Outcomes;
