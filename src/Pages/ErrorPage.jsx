 import errorImage from '../assets/error.jpg'
 import NavBar from '../Components/NavBar'
 import { Link } from 'react-router-dom'

 function ErrorPage() {
    return(
        <div id='error'>
            <NavBar />
            <div id='error-container'>
            <img src={errorImage} alt='error'></img>            
            <h3>Page not found !</h3>   
            <button id='error-button'><Link to='/'>Back to Home</Link> </button>         
            </div>
            
        </div>
    )
 }
 export default ErrorPage