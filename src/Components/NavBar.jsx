import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

function NavBar() {
    return (
        <div id="nav-bar-container" style={{ position: "fixed", top: "1", zIndex: 1 }}>
            <div id="logo">
                <span className="black">B</span><span className="white">L</span><span className="black">A</span><span className="white">C</span><span className="black">K</span><span className="white">J</span><span className="black">A</span><span className="white">C</span><span className="black">K</span>
                <img id="logo-image" src={logo} />
            </div>
            <div id="nav-bar">
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/about" replace>About</NavLink>
                <NavLink to="/dealing" replace>Dealing</NavLink>
                <NavLink to="/outcomes" replace>Outcomes</NavLink>
                <NavLink to="/game" replace>Game</NavLink>
            </div>
        </div>
    )
}
export default NavBar