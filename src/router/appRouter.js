import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword"
import UpdatePassword from "../pages/UpdatePassword";
import VerifyEmail from "../pages/VerifyEmail";
const appRouter = createBrowserRouter([{
    element : <App/>,
    path : "/",
    children : [
        {
            element : <Home/>,
            path : "/"
        },
        {
            element : <Login/>,
            path : "/login"
        },
        {
            element : <Signup/>,
            path : "/signup"
        },
        {
            element : <ForgotPassword/>,
            path : "/forgot-password"
        },        {
            element : <UpdatePassword/>,
            path : "/update-password"
        },        {
            element : <VerifyEmail/>,
            path : "/verify-email"
        },

    ]
}])

export default appRouter;