import { Link } from "react-router-dom"
import gameSound from "../assets/gameSound.wav"
function GameStartPage (){
    const myGameSound = () => {
        const audio = new Audio(gameSound);
        audio.play();
      }
    return (
        <div id="game-container">
            <h1>BLACKJACK</h1>
            <button onClick={myGameSound} id='play-btn'> <Link to="/game/play"><i class="fa fa-play" aria-hidden="true">  Play</i></Link>
            </button>
        </div>
    )
}
export default GameStartPage