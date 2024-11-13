import NavBar from "../Components/NavBar";
import { useRef, useState } from "react";
import Cards from "../Utils/cards";
import suitImage from "../assets/suit.png";
import King from "../assets/king.png";
import Queen from "../assets/queen.png";
import Jack from "../assets/jack.png";
import Ace from "../assets/ace.png";
import Footer from "../Components/Footer.jsx";
function About() {
  const [highlighted, setHighlighted] = useState(false);
  const answerRef = useRef(null);
  const answeRef1 = useRef(null);
  const answeRef2 = useRef(null);
  const answeRef3 = useRef(null);
  const answeRef4 = useRef(null);
  const answeRef5 = useRef(null)
  const handleQuestionClick = (ref) => {
    [answerRef, answeRef1, answeRef2, answeRef3, answeRef4].forEach((r) => {
      r.current.style = "color: black; text-decoration: none;";
    });
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setHighlighted(!highlighted);
    highlighted
      ? (ref.current.style = "color: green; text-decoration: underline; text-underline-offset: 0.3em; text-decoration-thickness: 1px;")
      : (ref.current.style = "color: black; text-decoration: none;");
  };

  const lingo = ["hit", "stand", "draw", "push", "burst", "a blackjack","splitting", "double down", "dealer", "shuffle", "hand", "stay","push","deal", "stakes",]

  return (
    <div className="home-background">
      <NavBar />
      <div id="about-content-div">
        <div id="side-bar">
          <span id="side-bar-title">Quick Links</span>
          <a onClick={() => handleQuestionClick(answerRef)}>
            What is another name for blackjack?
          </a>
          <a onClick={() => handleQuestionClick(answeRef1)}>
            How many players are required to play blackjack?
          </a>
          <a onClick={() => handleQuestionClick(answeRef4)}>What is the main aim of playing blackjack?</a>
          <a onClick={() => handleQuestionClick(answeRef2)}>How are points calculated in blackjack?</a>
          <a onClick={() => handleQuestionClick(answeRef5)}> What is a blackjack win?</a>
          <a onClick={() => handleQuestionClick(answeRef3)}>Are there some strategies you can use when playing blackjack?</a>
          
        </div>
        <div id="about-content">
          {/*<p ref={answerRef} style={{color: "green"}}>This is the content div</p>*/}
          <p>
           Blackjack,             
              <span ref={answerRef}> also known as 21</span>      
            , is the
            <span className="history">
              most widely played casino banking game in the world!
            </span>, 
            The game is a comparing card game where players compete with the
            dealer rather than each other.
            <span ref={answeRef1}>
              
              Traditionaly the game is played at a table of two to seven players
            </span>
            , one of which is the dealer and uses decks of 52 cards.
          </p>
          <p><span ref={answeRef4}> 
            The goal of the game is to beat the dealer:            
            Have a hand that totals higher than the dealer's, but
            doesn't total more than 21</span>. If
            your hand totals more than 21, it is called a{" "}
            <span className="color">burst</span>,which means you are out of the
            game.
          </p>
          <p ref={answeRef5}>
            A player secures a win when he/she has a higher hand than the other players and dealer, when the dealer busts or when the player hits 21 on the first draw. 
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
          <p style={{marginBottom: "100px"}} ref={answeRef3}>
          While there is no guaranteed way to win at blackjack, there are some strategies that can increase your chances of success. Here are a few tips:
          
          <ul>
            <li>Always assume the dealer’s face-down card is worth 10.</li>
            <li>When your hand value is 12-16, hit if the dealer’s face-up card is 7 or higher.</li>
            <li>When your hand value is 17 or higher, stand.</li>
            <li>Double down on 10 or 11 when the dealer’s face-up card is 9 or lower</li>
            <li>Never split 10s, but always split aces and 8s.</li>
          </ul>
          </p>
          
        </div>
        <div id="lingo">
          <h4 style={{color: "goldenrod", textAlign: "center"}}>Blackjack Lingo</h4>
          {lingo.map((item, index) => (
            <button className="lingo-item" key={index}>{item}</button>
          ))}
          
        </div>
        <div id="video">
        <h4 style={{color: "goldenrod", textAlign: "center"}}>How to play blackjack</h4>
          <iframe src="https://www.youtube.com/embed/PljDuynF-j0" title="How to Play (and Win) at Blackjack: The Expert&#39;s Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
        
      </div>
      <Footer /> 
    </div>
  );
}
export default About;
