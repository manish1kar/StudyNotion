import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const appRouter = createBrowserRouter([{
    element : <App/>,
    path : "/",
    children : [
        {
            element : <Home/>,
            path : "/"
        },

    ]
}])

export default appRouter;