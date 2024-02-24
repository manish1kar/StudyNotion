import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/appRouter";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={appStore}>
      <RouterProvider router={appRouter}>
         <App />
         <Toaster/>
      </RouterProvider> 
      </Provider>   
  </React.StrictMode>
);
