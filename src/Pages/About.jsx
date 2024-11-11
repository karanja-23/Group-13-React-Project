import NavBar from "../Components/NavBar";
import { useRef, useState } from "react";
import Cards from "../Utils/cards";
import suitImage from "../assets/suit.png";
import King from "../assets/king.png";
import Queen from "../assets/queen.png";
import Jack from "../assets/jack.png";
import Ace from "../assets/ace.png";
function About() {
  const [highlighted, setHighlighted] = useState(false);
  const answerRef = useRef(null);
  const answeRef1 = useRef(null);
  const answeRef2 = useRef(null);
  const answeRef3 = useRef(null);
  const handleQuestionClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    handleHighlight();
    highlighted
      ? (ref.current.style = "color: green; text-decoration: underline;")
      : (ref.current.style = "color: black; text-decoration: none;");
  };

  function handleHighlight() {
    setHighlighted(!highlighted);
  }

  return (
    <div className="home-background">
      <NavBar />
      <div id="about-content-div">
        <div id="side-bar">
          <span id="side-bar-title">Quick Links</span>
          <a onClick={() => handleQuestionClick(answerRef)}>
            What is another name for blackjack ?
          </a>
          <a onClick={() => handleQuestionClick(answeRef1)}>
            How many players are required to play blackjack ?
          </a>
          <a onClick={() =>{handleQuestionClick(answeRef3)}}>What is the ain aim of playing blackjack ?</a>
          <a onClick={() => handleQuestionClick(answeRef2)}>How are points calculated in blackjack ?</a>
          <a > What are the rules of blackjack ?</a>
          <a>What's a good hand in blackjack ?</a>
        </div>
        <div id="about-content">
          {/*<p ref={answerRef} style={{color: "green"}}>This is the content div</p>*/}
          <p>
            <span className="color">Blackjack</span> or{" "}
            <span className="color">
              <span ref={answerRef}>21</span>
            </span>{" "}
            is the{" "}
            <span className="history">
              most widely played casino banking game in the world!
            </span>
            The game is a comparing card game where players compete with the
            dealer rather than each other.
            <span ref={answeRef1}>
              
              Traditionaly the game is played at a table of two to seven players
            </span>
            , one of which is the dealer and uses decks of 52 cards.
          </p>
          <p>
            <span ref={answeRef3}>
              The goal of the game is to beat the dealer:
            
            Have a hand that totals higher than the dealer's, but
            doesn't total more than 21</span>. If
            your hand totals more than 21, it is called a{" "}
            <span className="color">burst</span>,which means you are out of the
            game.
          </p>
          <div id="inner-about" ref={answeRef2}>
            <p>
              → All number{" "}
              <span class="history">cards(2-7), are taken at face value</span>,
              ie. they score the value indicated on them.(card 2 = 2 points,
              card 7 = 7 points...)
              <div id="cards2_7">
              <Cards image={suitImage} number={2}/>
              <Cards image={suitImage} number={3}/>
              <Cards image={suitImage} number={4}/>
              <Cards image={suitImage} number={5}/>
              <Cards image={suitImage} number={6}/>
              <Cards image={suitImage} number={7}/>
              <Cards image={suitImage} number={8}/>
              <Cards image={suitImage} number={9}/>
              <Cards image={suitImage} number={10}/>
              </div>
            </p>
            <p>
              → Each face card (jack, queen, king), counts as{" "}
              <span class="history">10 points</span>:
              <div id="face_cards">
                <Cards image={King} number="K"/>
                <Cards image={Queen} number="Q"/>
                <Cards image={Jack} number="J"/>
               
              </div>
            </p>
            <p>
              → The aces count as <span class="history">1 point</span> or{" "}
              <span class="history">11 points</span>, whichever is best for the
              player's hand.
              <div id="aces">
                <Cards image={Ace} number="A"/>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
