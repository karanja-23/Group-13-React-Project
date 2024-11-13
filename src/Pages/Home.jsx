import NavBar from "../Components/NavBar";
import {Link} from "react-router-dom";
import "../CSS/index.css";
import apple from "../assets/apple.png";
function Home() {
    return (
        <div className="home-back">
            <NavBar />
           <img src=""/>
            <div className="home">
                <h1>Welome to the Blackjack Game!</h1>
                <p className="p1"> Ready to challenge the dealer and test you luck? Learn the rules,practise your skills,and see if you can beat without busting! </p>
            </div>
            <div className="card-con">

             <div className="card">
                <span className="top-left">A</span>
                <div className="card-body">
                    <span className="card-number">A</span>
                    <span className="card-suit">♠</span>
                </div>
                <span className="bottom-rigth">A</span>
             </div>

             <div className="card">
                <span className="top-left">K</span>
                <div className="card-body">
                    <span className="card-number">K</span>
                    <span className="card-suit">♠</span>
                </div>
                <span className="bottom-rigth">K</span>
             </div>



             <div className="card">
                <span className="top-left">J</span>
                <div className="card-body">
                    <span className="card-number">J</span>
                    <span className="card-suit">♠</span>
                </div>
                <span className="bottom-rigth">J</span>
             </div>


             <div className="card">
                <span className="top-left">Q</span>
                <div className="card-body">
                    <span className="card-number">Q</span>
                    <span className="card-suit">♠</span>
                </div>
                <span className="bottom-rigth">Q</span>
             </div>
            </div>
            
        </div>
    )
}

export default Home