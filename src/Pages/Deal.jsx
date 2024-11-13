import NavBar from "../Components/NavBar"
function Deal (){
    return(
        <div className="home-background">
            <NavBar/>
            <ol style={{width: "80%"}}>
                <li>Both the dealer and player(s) are dealt two cards, but the dealer only shows one cardwhile the other is kept face down. <span style={{textDecoration: "underline", textUnderlineOffset: "0.2em"}}>The player always goes first</span></li>
                <div className="step-demo">
                    
                </div>
            </ol>
        </div>
    )
}
export default Deal