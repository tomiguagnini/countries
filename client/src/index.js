import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ActivityForm from "./Pages/ActivityForm";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import CountryDetail from "./Pages/CountryDetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/countries",
        element: <Dashboard />,
    },
    {
        path: "/activity",
        element: <ActivityForm />,
    },
    {
        path: "/Country/:id",
        element:<CountryDetail/>
    }
]);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
