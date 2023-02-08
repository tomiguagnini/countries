import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ActivityForm from "./Pages/ActivityForm";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/activity",
        element: <ActivityForm />,
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
