import Home from "../Pages/Home";
import About from "../Pages/About";
import Dealing from "../Pages/Dealing";
import Game from "../Pages/Game";
import Outcomes from "../Pages/Outcomes";
import ErrorPage from "../Pages/ErrorPage";
import Deal from "../Pages/Deal";

import Thegame from "../Pages/Thegame";
const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: '/dealing',
        element: <Deal />,
        errorElement: <ErrorPage />
    },
    {
        path: '/game',
        element: <Game />,
        errorElement: <ErrorPage />,
           
    },
    {
        path: '/outcomes',
        element: <Outcomes />,
        errorElement: <ErrorPage />
    }
    ,
    {
        path: '/game/play', 
        element: <Thegame />
    }
]
export default routes