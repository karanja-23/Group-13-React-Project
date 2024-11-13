import logo from '../assets/logo.png'
function Footer(){
    return(
        <div id="footer" style={{ position: "absolute", bottom: "1", zIndex: 1 }}>
            <div id="footer-logo">
                <img src={logo} alt='logo'></img>
                <span>A complete guide to blackjack designed to teach you how to beat the game of blackjack</span>
            </div>
            <div>
                
            </div>
            <div>
                <span>Contact us</span>
            </div>
        </div>
    )
}

export default Footer;