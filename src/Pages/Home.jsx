
import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"
import Img from "../assets/deck.png"

function Home() {
    return (
        <div className="home-background">
            <NavBar />
            <div id="my-homepage">
                <h1>Master the art of Playing Blackjack</h1>
                <img id="img1" style={{float: "right"}} src={Img} alt="home image"></img>
                <img  id="img2" src={Img} alt="home image"></img>
                <span id="what-to-learn">What you'll Learn:</span>
                <ul style={{textAlign: "center"}}>
                    <li>Basic Rules</li>
                    <li>How to play Blackjack</li>
                    <li>Strategies on how to win</li>                
                    <li>Cool Blackjack lingo</li>  
                    <li>and more ...</li>               

                </ul>
                <button id="home-btn"><Link to="./about">Get Started</Link></button>
            </div>
            
        </div>
    )
}

export default Home