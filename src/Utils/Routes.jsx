import Home from "../Pages/Home";
import About from "../Pages/About";
import Dealing from "../Pages/Dealing";
import Game from "../Pages/Game";
import Outcomes from "../Pages/Outcomes";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/dealing',
        element: <Dealing />
    },
    {
        path: '/game',
        element: <Game />
    },
    {
        path: '/outcomes',
        element: <Outcomes />
    }
]
export default routes