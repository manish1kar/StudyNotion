import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword"
import UpdatePassword from "../pages/UpdatePassword";
import VerifyEmail from "../pages/VerifyEmail";
import Dashboard from "../pages/Dashboard";
import MyProfile from "../components/core/Dashboard/MyProfile";
import Contact from "../pages/Contact";
import About from "../pages/About";
import PrivateRoute from "../components/core/Auth/PrivateRoute";
import Settings from "../components/core/Dashboard/Settings/index"
import EnrolledCourses from "../components/core/Dashboard/EnrolledCourses"

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
        {
            element : 
            <PrivateRoute>
                <Dashboard/>
            </PrivateRoute>
            ,
            children : [
                {
                    element : <MyProfile/>,
                    path : "/dashboard/my-profile"
                },
                {
                    element : <Settings/>,
                    path : "/dashboard/settings"
                },
                {
                    element : <EnrolledCourses/>,
                    path : "/dashboard/enrolled-courses"
                },
            ]
        },
        {
            element : <Contact/>,
            path : "/contact"
        },

        {
            element : <About/>,
            path : "/about"
        },
    ]
}])

export default appRouter;