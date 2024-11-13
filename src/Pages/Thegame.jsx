import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Cards from "../Utils/cards";
import King from "../assets/king.png";
import Backside from "../assets/playing-card.png";
import Suit from "../assets/suit.png";
import Ace from "../assets/ace.png";
import Queen from "../assets/queen.png";
import Jack from "../assets/jack.png";
import { useState, useEffect } from "react";
import LoseAlert from "../Components/Alert";
import Confetti from "react-confetti";
import winnerSound from "../assets/robot-winner.wav"
import loserSound from "../assets/looser.wav"
import errorSound from "../assets/error.wav"
import gameSound from "../assets/gameSound.wav"



function Thegame() {
  const [win, setWin] = useState("");
  const [dealerScore, setDealerScore] = useState(0);
  useEffect(() => {
    myGameSound();
  }, []);
  useEffect(() => {
    let Card1score = "";
    if (dealerCards[0].number === "K") {
      Card1score = 10;
    }
    if (dealerCards[0].number === "Q") {
      Card1score = 10;
    }
    if (dealerCards[0].number === "J") {
      Card1score = 10;
    }
    if (dealerCards[0].number === "A") {
      Card1score = 10;
    }
    if (
      dealerCards[0].number === "2" ||
      dealerCards[0].number === "3" ||
      dealerCards[0].number === "4" ||
      dealerCards[0].number === "5" ||
      dealerCards[0].number === "6" ||
      dealerCards[0].number === "7" ||
      dealerCards[0].number === "8" ||
      dealerCards[0].number === "9" ||
      dealerCards[0].number === "10"
    ) {
      Card1score = parseInt(dealerCards[0].number);
    }

    let Card2score = "";
    if (dealerCards[1].number === "K") {
      Card2score = 10;
    }
    if (dealerCards[1].number === "Q") {
      Card2score = 10;
    }
    if (dealerCards[1].number === "J") {
      Card2score = 10;
    }
    if (dealerCards[1].number === "A") {
      Card2score = 10;
    }
    if (
      dealerCards[1].number === "2" ||
      dealerCards[1].number === "3" ||
      dealerCards[1].number === "4" ||
      dealerCards[1].number === "5" ||
      dealerCards[1].number === "6" ||
      dealerCards[1].number === "7" ||
      dealerCards[1].number === "8" ||
      dealerCards[1].number === "9" ||
      dealerCards[1].number === "10"
    ) {
      Card2score = parseInt(dealerCards[1].number);
    }

    let Card3score = 0;
    if (dealerCards[2]) {
      const cardValue = dealerCards[2].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card3score = 10;
      } else if (!isNaN(cardValue)) {
        Card3score = parseInt(cardValue);
      }
    }
    let Card4score = 0;
    if (dealerCards[3]) {
      const cardValue = dealerCards[3].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card4score = 10;
      } else if (!isNaN(cardValue)) {
        Card4score = parseInt(cardValue);
      }
    }
    let Card5score = 0;
    if (dealerCards[4]) {
      const cardValue = dealerCards[4].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card5score = 10;
      } else if (!isNaN(cardValue)) {
        Card5score = parseInt(cardValue);
      }
    }

    setDealerScore(
      Card1score + Card2score + Card3score + Card4score + Card5score
    );
    if (dealerScore > 21) {
      setWin(true);
      playAudio();
           
    }
    if (dealerScore === 21) {
      setWin(false);
      loserAudio()
    }
  });
  const loserAudio = ()=>{
    const error = new Audio(errorSound);
    error.play();
    
    setTimeout(() => {
      const audio = new Audio(loserSound);
    audio.play();    
    }, 1000);
  }

 const playAudio= ()=>{
  const audio = new Audio(winnerSound);
  audio.play();
 }
 const myGameSound = () => {
  const audio = new Audio(gameSound);
  audio.play();
}
  const [playerScore, setPlayerScore] = useState(0);
  useEffect(() => {
    let Card1score = "";
    if (playerCards[0].number === "K") {
      Card1score = 10;
    }
    if (playerCards[0].number === "Q") {
      Card1score = 10;
    }
    if (playerCards[0].number === "J") {
      Card1score = 10;
    }
    if (playerCards[0].number === "A") {
      Card1score = 10;
    }
    if (
      playerCards[0].number === "2" ||
      playerCards[0].number === "3" ||
      playerCards[0].number === "4" ||
      playerCards[0].number === "5" ||
      playerCards[0].number === "6" ||
      playerCards[0].number === "7" ||
      playerCards[0].number === "8" ||
      playerCards[0].number === "9" ||
      playerCards[0].number === "10"
    ) {
      Card1score = parseInt(playerCards[0].number);
    }

    let Card2score = "";
    if (playerCards[1].number === "K") {
      Card2score = 10;
    }
    if (playerCards[1].number === "Q") {
      Card2score = 10;
    }
    if (playerCards[1].number === "J") {
      Card2score = 10;
    }
    if (playerCards[1].number === "A") {
      Card2score = 10;
    }
    if (
      playerCards[1].number === "2" ||
      playerCards[1].number === "3" ||
      playerCards[1].number === "4" ||
      playerCards[1].number === "5" ||
      playerCards[1].number === "6" ||
      playerCards[1].number === "7" ||
      playerCards[1].number === "8" ||
      playerCards[1].number === "9" ||
      playerCards[1].number === "10"
    ) {
      Card2score = parseInt(playerCards[1].number);
    }

    let Card3score = 0;
    if (playerCards[2]) {
      const cardValue = playerCards[2].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card3score = 10;
      } else if (!isNaN(cardValue)) {
        Card3score = parseInt(cardValue);
      }
    }
    let Card4score = 0;
    if (playerCards[3]) {
      const cardValue = playerCards[3].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card4score = 10;
      } else if (!isNaN(cardValue)) {
        Card4score = parseInt(cardValue);
      }
    }
    let Card5score = 0;
    if (playerCards[4]) {
      const cardValue = playerCards[4].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card5score = 10;
      } else if (!isNaN(cardValue)) {
        Card5score = parseInt(cardValue);
      }
    }
    let Card6score = 0;
    if (playerCards[5]) {
      const cardValue = playerCards[5].number;
      if (["K", "Q", "J", "A"].includes(cardValue)) {
        Card6score = 10;
      } else if (!isNaN(cardValue)) {
        Card6score = parseInt(cardValue);
      }
    }

    setPlayerScore(Card1score + Card2score + Card3score + Card4score + Card5score + Card6score);
    if (playerScore > 21) {
      setWin(false);
      loserAudio();
    }
    if (playerScore === 21) {
      setWin(true);
      playAudio();
    }
  });

  const cards = [
    {
      image: King,
      number: "K",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Queen,
      number: "Q",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Jack,
      number: "J",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Ace,
      number: "A",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "2",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "3",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "4",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "5",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "6",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "7",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "8",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "9",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
    {
      image: Suit,
      number: "10",
      fontSize: "0.46em",
      width: "78px",
      height: "120px",
    },
  ];
  
  {
    /*const upsideDownCard = {image:Backside,number: "", fontSize: "0.46em",width: "78px", height: "120px" }*/
  }
  const randomCard1 = cards[Math.floor(Math.random() * cards.length)];
  const randomCard2 = cards[Math.floor(Math.random() * cards.length)];
  const randomCard3 = cards[Math.floor(Math.random() * cards.length)];
  const randomCard4 = cards[Math.floor(Math.random() * cards.length)];

  const [playerCards, setPlayerCards] = useState([randomCard2, randomCard3]);
  const [dealerCards, setDealerCards] = useState([randomCard1, randomCard4]);
  function hit() {
    const newCard = cards[Math.floor(Math.random() * cards.length)];
    setPlayerCards([...playerCards, newCard]);
  }
  function stand() {
    const newCard = cards[Math.floor(Math.random() * cards.length)];
    setDealerCards([...dealerCards, newCard]);
  }
  
  
  return (
    <div className="home-background">
      <NavBar />
      {win ? <Confetti count={100} size={20} gravity={0.1} /> : null}
      <div id="game-container">
        <Link to="/game">
          <i id="back" className="fa fa-angle-left" aria-hidden="true"></i>
        </Link>
        <div id="table">
          {win ? (
            <LoseAlert
              message="YOU WIN !"
              buttonText="Play again"
              playerScore={playerScore}
              dealerScore={dealerScore}
            />
          ) : null}
          {win === false ? (
            <LoseAlert
              message="YOU LOSE !"
              buttonText="Try again"
              playerScore={playerScore}
              dealerScore={dealerScore}
            />
          ) : null}
          <div id="dealer-table">
            {dealerCards.map((card, index) => (
              <Cards
                key={index}
                image={card.image}
                number={card.number}
                fontSize={card.fontSize}
                width={card.width}
                height={card.height}
              />
            ))}
            <p className="points">Dealer's points: {dealerScore}</p>
          </div>
          <div id="player-table">
            {playerCards.map((card, index) => (
              <Cards
                key={index}
                image={card.image}
                number={card.number}
                fontSize={card.fontSize}
                width={card.width}
                height={card.height}
              />
            ))}

            <p className="points">Player's points: {playerScore}</p>
          </div>
        </div>
      </div>
      <div id="play-btns">
        <button onClick={hit}>Hit</button>
        <button onClick={stand}>stand</button>
      </div>
    </div>
  );
}
export default Thegame;
