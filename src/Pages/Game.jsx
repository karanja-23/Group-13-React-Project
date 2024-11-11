import NavBar from "../Components/NavBar"
function Game(){
    return (
        <div className="home-background">
            <NavBar />
           <p style={{zIndex: 1, position: 'relative'}}>Game</p>
        </div>
    )
}
export default Game