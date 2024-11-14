import NavBar from "../Components/NavBar"
import { useState, useEffect } from "react"
import Cards from "../Utils/cards";
import King from "../assets/king.png";
import Backside from "../assets/playing-card.png";
import Suit from "../assets/suit.png";
import Ace from "../assets/ace.png";
import Queen from "../assets/queen.png";
import Jack from "../assets/jack.png";
function Deal (){
    const [step1a, setStep1a] = useState(false);
    const [step1b, setStep1b] = useState(false);
    const [step1c, setStep1c] = useState(false);
    const [step1d, setStep1d] = useState(false)
    const [step2, setStep2] = useState(false);
    const [flip, setFlip] = useState(false)
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
    const [randomCard1, setRandomCard1] = useState(null);
    const [randomCard2, setRandomCard2] = useState(null);
    const [randomCard3, setRandomCard3] = useState(null);

    useEffect(() => {

        const startCycle = () => {
            const newRandomCard1 = cards[Math.floor(Math.random() * cards.length)];
            const newRandomCard2 = cards[Math.floor(Math.random() * cards.length)];
            const newRandomCard3 = cards[Math.floor(Math.random() * cards.length)];
      
            setRandomCard1(newRandomCard1);
            setRandomCard2(newRandomCard2);
            setRandomCard3(newRandomCard3)
          // Show the player's first card
          setStep1a(true);
    
          // After 2 seconds, show the second player's card
          setTimeout(() => {
            setStep1b(true);
          }, 2000);
    
          // After 3 seconds, show the dealer's card
          setTimeout(() => {
            setStep1c(true); // Dealer's face-up card
          }, 3000);
    
          // After 4 seconds, show the dealer's face-down card
          setTimeout(() => {
            setStep1d(true); // Dealer's face-down card
          }, 4000);
                // After 6 seconds, reset the state for the next cycle
      setTimeout(() => {
        setStep1a(false);
        setStep1b(false);
        setStep1c(false);
        setStep1d(false);
      }, 6000);

      // Restart the cycle after 8 seconds
      setTimeout(startCycle, 8000);
    };

    startCycle(); // Start the cycle when the component mounts
  }, []);
            
  useEffect(()=>{
    const startCycle = ()=>{
        const intervalId =setInterval(()=>{
            setStep2(true)

        },1000)
        setTimeout(()=>{
            setStep2(false)
            clearInterval(intervalId)
            setTimeout(startCycle, 6000);
        },4000)
        
    }
    startCycle()
   
  },[])
  useEffect(() => {
    const startCycle= ()=>{
        const intervalId =setInterval (()=>{
            setFlip(true)
        },1000)
        setTimeout(()=>{
            setFlip(false)
            clearInterval(intervalId)
            setTimeout(startCycle, 6000);
        },4000)       
    }
    startCycle()
  },[])

    return(
        <div className="home-background">
            <NavBar/>
            <ol id="steps" style={{width: "80%"}}>
                <li>Both the dealer and player(s) are dealt two cards, but the dealer only shows one cardwhile the other is kept face down. <span style={{textDecoration: "underline", textUnderlineOffset: "0.2em"}}>The player always goes first</span></li>
                <div className="step-demo">
                    <div id="step-dealer">
                        <h4>Dealer's hand</h4>
                        {step1c ?  (
                            <Cards image={randomCard3.image} number={randomCard3.number}/>
                        ) : null}
                        {step1d ? (
                            <Cards image={Backside} number="" />
                        ) : null}
                    </div>
                    <div id="step-player">
                        <h4>PLayer's hand</h4>
                        {step1a ? (
                                <Cards image={randomCard1.image} number={randomCard1.number}/>
                            ): (null)}
                                            {step1b ? (
                                <Cards image={randomCard2.image} number={randomCard2.number}/>
                            ): (null)}        
                    </div>
                           
                </div>
                <li style={{marginTop: "40px"}}>The player has the option to take more cards or stay their hand.(With the goal of getting closer than the dealer) to 21, but being cautious not to go over 21. In the instance above, the player will take another card, inorder to increase his point total:</li>
                <div className="step-demo">
                <div id="step-dealer">
                <h4>Dealer's hand</h4>
                   <Cards image={cards[3].image} number={cards[3].number}/>          
                   <Cards image={Backside} number=""/>
                </div>
                <div id="step-player">
                <h4>PLayer's hand</h4>
                <Cards image={cards[0].image} number={cards[0].number}/>          
                <Cards image={cards[7].image} number={cards[7].number}/> 
                {step2 ? (
                    <Cards image={cards[4].image} number={cards[4].number}/> 
                ): null}
                </div>
                </div>
                <li style={{marginTop: "40px"}}>The dealer takes his/her turn by flipping his card face up and displaying its value:</li>
                <div className="step-demo">
                <div id="step-dealer">
                <h4>Dealer's hand</h4>
                   <Cards image={cards[3].image} number={cards[3].number}/>          
                   {flip? <Cards image={cards[6].image} number={cards[6].number}/>: <Cards image={Backside} number=""/>}
                </div>
                <div id="step-player">
                <h4>PLayer's hand</h4>
                <Cards image={cards[0].image} number={cards[0].number}/>          
                <Cards image={cards[7].image} number={cards[7].number}/> 
                <Cards image={cards[10].image} number={cards[10].number}/> 
                </div>
                </div>
                <li style={{marginTop:"40px"}}>Having revealed his/her points, the dealer compares his points to the player's points. If the player's points are higher, the player wins. The latter is also true. In the instance above, the player wins because he has more points than the dealer:</li>
                <div className="step-demo">
                <div id="step-dealer">
                <h4>Dealer's hand</h4>
                   <Cards image={cards[3].image} number={cards[3].number}/>          
                   <Cards image={cards[6].image} number={cards[6].number}/>
                </div>
                <div id="step-player">
                <h4>PLayer's hand</h4>
                <Cards image={cards[0].image} number={cards[0].number}/>          
                <Cards image={cards[7].image} number={cards[7].number}/> 
                <Cards image={cards[10].image} number={cards[10].number}/> 
                </div>
                </div>
            </ol>
        </div>
    )
}
export default Deal