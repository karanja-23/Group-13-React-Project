
import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="home-background">
            <NavBar />
            <div id="home-container">
            <h1 id="home-heading">Master the art of blackjack</h1>
            <span>Learn the basics and start winning big!</span> 
            <p>What you'll learn: </p>
            <ol style={{textAlign: "center", fontSize: "0.8em", margin:"auto", listStyle: "none", width:"80%"}}>
                <li>→ Rules and objectives of the game.</li>
                <li>→ The values of different cards (e.g. Ace, 2-10, Jack, Queen, King)</li>
                <li>→ Basic strategies for playing blackjack(e.g. hit, stand, double down, split)</li>
                <li>→ Calculating your hand value</li>
                <li>→ Common blackjack lingo, and many more ...</li>
                
            </ol>
            <button id="home-button"><Link style={{textDecoration: "none"}} to="/about">Get Started</Link></button>
            </div>
            
        </div>
    )
}

export default Home