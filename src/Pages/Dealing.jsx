import { useEffect, useState } from "react"; // Only import necessary hooks
import NavBar from "../Components/NavBar";
import Cards from "../Utils/card2";  // Ensure you import the Cards component correctly
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
      image: `../assets/${rank.number}${suit}.png`,  // You might want to adjust this path if necessary
    }))
  );

  // Shuffle the deck multiple times for better randomness
  for (let i = 0; i < 5; i++) {
    deck = deck.sort(() => Math.random() - 0.5);
  }

  return deck;
}

// Draw a card safely
function drawCard(deck) {
  return deck.length > 0 ? deck.pop() : { number: "", value: 0, suit: "", image: Backside };
}

// Calculate score with ace handling
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

  useEffect(() => {
    const newDeck = createDeck();
    const initialPlayerCards = [drawCard(newDeck), drawCard(newDeck)];
    const initialDealerCards = [drawCard(newDeck), drawCard(newDeck)];

    // Shuffle the deck again after dealing
    setDeck(newDeck.sort(() => Math.random() - 0.5));
    setPlayerCards(initialPlayerCards);
    setDealerCards(initialDealerCards);
  }, []);

  // Dealer's turn to draw additional cards if needed
  useEffect(() => {
    if (!dealerTurnDone) {
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
  }, [dealerCards, deck, dealerTurnDone]);

  // Determine the winner after the dealer's turn
  useEffect(() => {
    if (dealerTurnDone) {
      // Add a small delay to simulate game processing and randomness
      setTimeout(() => {
        const playerScore = calculateScore(playerCards);
        const dealerScore = calculateScore(dealerCards);

        // Random offset to scores for added unpredictability (optional)
        const randomOffset = Math.floor(Math.random() * 3) - 1;

        const finalPlayerScore = playerScore + randomOffset;
        const finalDealerScore = dealerScore + randomOffset;

        if (finalPlayerScore > 21) {
          setWinner("Dealer wins! Player busts.");
        } else if (finalDealerScore > 21) {
          setWinner("Player wins! Dealer busts.");
        } else if (finalPlayerScore > finalDealerScore) {
          setWinner("Player wins!");
        } else if (finalDealerScore > finalPlayerScore) {
          setWinner("Dealer wins!");
        } else {
          setWinner("It's a tie!");
        }
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
    setWinner(""); // Clear the winner message
    setDealerTurnDone(false); // Reset the dealer turn
  };


  return (
    <div className="home-background">
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
                    suit={card.suit}  // Pass the suit to the Cards component
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
                    suit={card.suit}  // Pass the suit to the Cards component
                    width="98px"
                    height="150px"
                  />
                ))}
              </div>
            </div>
          </li>
        </ol>
        <div className="winner-message">{winner}</div>
        <button className="start-new-game-btn" onClick={resetGame}>Start New Game</button>
      </div>
    </div>
  );
}

export default Dealing;
