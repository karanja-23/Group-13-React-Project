import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Cards from "../Utils/card2";
import Backside from "../assets/playing-card.png";
import "../CSS/index.css";

// Function to create and shuffle a full deck
function createDeck() {
  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = [
    { number: "A", value: 11 }, { number: "2", value: 2 }, { number: "3", value: 3 },
    { number: "4", value: 4 }, { number: "5", value: 5 }, { number: "6", value: 6 },
    { number: "7", value: 7 }, { number: "8", value: 8 }, { number: "9", value: 9 },
    { number: "10", value: 10 }, { number: "J", value: 10 }, { number: "Q", value: 10 }, { number: "K", value: 10 }
  ];

  let deck = suits.flatMap(suit =>
    ranks.map(rank => ({
      ...rank,
      suit,
      image: `../assets/${rank.number}${suit}.png`,
    }))
  );

  for (let i = 0; i < 5; i++) {
    deck = deck.sort(() => Math.random() - 0.5);
  }

  return deck;
}

function drawCard(deck) {
  return deck.length > 0 ? deck.pop() : { number: "", value: 0, suit: "", image: Backside };
}

function calculateScore(cards) {
  let score = 0;
  let aceCount = 0;

  cards.forEach(card => {
    score += card.value;
    if (card.number === "A") aceCount += 1;
  });

  while (score > 21 && aceCount) {
    score -= 10;
    aceCount -= 1;
  }
  return score;
}

function Dealing() {
  const [deck, setDeck] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [showDealerCard, setShowDealerCard] = useState(false);
  const [winner, setWinner] = useState("");
  const [dealerTurnDone, setDealerTurnDone] = useState(false);
  const [playerTurnDone, setPlayerTurnDone] = useState(false);

  useEffect(() => {
    const newDeck = createDeck();
    const initialPlayerCards = [drawCard(newDeck), drawCard(newDeck)];
    const initialDealerCards = [drawCard(newDeck), drawCard(newDeck)];
    setDeck(newDeck.sort(() => Math.random() - 0.5));
    setPlayerCards(initialPlayerCards);
    setDealerCards(initialDealerCards);
  }, []);

  useEffect(() => {
    if (!playerTurnDone) {
      const playerScore = calculateScore(playerCards);
      if (playerScore < 17) {
        const newCard = drawCard(deck);
        setPlayerCards([...playerCards, newCard]);
      } else {
        setPlayerTurnDone(true);
      }
    }
  }, [playerCards, playerTurnDone, deck]);

  useEffect(() => {
    if (playerTurnDone && !dealerTurnDone) {
      let dealerScore = calculateScore(dealerCards);
      let updatedDealerCards = [...dealerCards];

      while (dealerScore < 17 && deck.length > 0) {
        const newCard = drawCard(deck);
        updatedDealerCards.push(newCard);
        dealerScore = calculateScore(updatedDealerCards);
      }

      setDealerCards(updatedDealerCards);
      setShowDealerCard(true);
      setDealerTurnDone(true);
    }
  }, [playerTurnDone, dealerCards, deck, dealerTurnDone]);

  useEffect(() => {
    if (dealerTurnDone) {
      setTimeout(() => {
        const playerScore = calculateScore(playerCards);
        const dealerScore = calculateScore(dealerCards);

        let resultMessage = `Player ${playerScore} vs Dealer ${dealerScore} - `;
        if (playerScore > 21) {
          resultMessage += "Dealer wins! Player busts.";
        } else if (dealerScore > 21) {
          resultMessage += "Player wins! Dealer busts.";
        } else if (playerScore > dealerScore) {
          resultMessage += "Player wins!";
        } else if (dealerScore > playerScore) {
          resultMessage += "Dealer wins!";
        } else {
          resultMessage += "It's a tie!";
        }
        setWinner(resultMessage);
      }, 500);
    }
  }, [dealerTurnDone, playerCards, dealerCards]);

  const resetGame = () => {
    const newDeck = createDeck();
    const initialPlayerCards = [drawCard(newDeck), drawCard(newDeck)];
    const initialDealerCards = [drawCard(newDeck), drawCard(newDeck)];
    setDeck(newDeck.sort(() => Math.random() - 0.5));
    setPlayerCards(initialPlayerCards);
    setDealerCards(initialDealerCards);
    setShowDealerCard(false);
    setWinner("");
    setDealerTurnDone(false);
    setPlayerTurnDone(false);
  };

  return (
    <div className="home-backgroundDealing">
      <NavBar />
      <div id="dealing-content">
        <ol>
          <li className="steps">
            The dealer and player are dealt two cards automatically.
            <div className="dealing-demo">
              <div id="dealer">
                <span className="dealer-label">Dealer</span>
                {dealerCards.map((card, index) => (
                  <Cards
                    key={index}
                    className={`dealing-cards ${index === 1 && !showDealerCard ? "card-flip" : ""}`}
                    image={index === 1 && !showDealerCard ? Backside : card.image}
                    number={index === 1 && !showDealerCard ? "" : card.number}
                    suit={card.suit}
                    width="98px"
                    height="150px"
                  />
                ))}
              </div>
              <div id="player">
                <span className="player-label">Player</span>
                {playerCards.map((card, index) => (
                  <Cards
                    key={index}
                    className="dealing-cards"
                    image={card.image}
                    number={card.number}
                    suit={card.suit}
                    width="98px"
                    height="150px"
                  />
                ))}
              </div>
            </div>
          </li>
          <li className="steps">
            Player decides to automatically take another card if below 17, or stays otherwise.
          </li>
          <li className="steps">
            Dealer flips his card and takes cards until his score is 17 or more.
          </li>
          <li className="steps">
            The dealer compares points with the player to determine the winner.
            {winner && <div className="winner-message">{winner}</div>}
          </li>
        </ol>
        <button className="start-new-game-btn" onClick={resetGame}>Start New Deal</button>
      </div>
    </div>
  );
}

export default Dealing;
