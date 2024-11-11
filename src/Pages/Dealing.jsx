import NavBar from "../Components/NavBar"
import Cards from "../Utils/cards"
import King from "../assets/king.png"
import Backside from "../assets/playing-card.png"
import Seven from "../assets/suit.png"
import Ace from "../assets/ace.png"
function Dealing (){
    const stepOnePlayerCards =[
        { image: Seven, number: "7", width: "60px", height: "92px" },
        { image: Ace, number: "A", width: "60px", height: "92px" }
    ]
    return (
        <div className="home-background">
            <NavBar />
            <div id="dealing-content">
                <ol>
                    <li className="steps">
                    Both the dealer and player(s) are dealt two cards, but the dealer only shows one cardwhile the other is kept face down.<br/>
                    <span style={{textDecoration: 'underline'}}>The player always goes first</span>
                    <div className="dealing-demo">
                        <div id="dealer">
                            <span className="dealer-label">Dealer</span>
                            <Cards className="dealing-cards" image={King} number="K" width="60px" height="92px" fontSize={"1.0em"}/>
                            <Cards id="backside" className="dealing-cards" image={Backside} number="" width="60px" height="92px" fontSize={"1.0em"} imageWidth="87%" imageHeight="87%" />
                        </div>
                        <div id="player">
                            <span className="player-label">Player</span>
                            <Cards className="dealing-cards" image={Seven} number="7" width="60px" height="92px" fontSize={"1.0em"}/>
                            <Cards className="dealing-cards" image={Ace} number="A" width="60px" height="92px" fontSize={"1.0em"}/>
                        </div>
                    </div>
                    </li>
                </ol>
            </div>
            
        </div>
    )
}
export default Dealing