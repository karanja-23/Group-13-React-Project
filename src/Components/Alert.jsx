import { useState } from "react";

function LoseAlert({message, buttonText,playerScore,dealerScore}) {
    const [showDetails, setshowDetails] = useState(false);
    let show = "none";
    function toggleDetails(){
        setshowDetails(!showDetails)
    }
    showDetails ? show="block" : show= "none"

    return (
      <div className="lose-alert">
        <span>{message}</span>
        <button onClick={() =>{
           
            window.location.reload()
        } }>{buttonText}</button>
        <i style={{cursor: "pointer"}} onClick={toggleDetails} class="fa fa-chevron-down" aria-hidden="true"> Show more information</i>
        <p style={{fontSize:"0.5em", display:show,margin: "0px"}}> Player: {playerScore} points</p><p style={{fontSize:"0.5em", display:show,margin:"0px"}}> Dealer: {dealerScore} points</p>
      </div>
    );
  }
  
  export default LoseAlert;