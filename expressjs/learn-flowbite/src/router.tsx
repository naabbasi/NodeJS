import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import MainLayout from "./layout/main-layout";

const applicationRouter = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "dashboard", element: <div>Dashboard</div>},
            {path: "layout", element: <MainLayout/>},
        ]
    },
]);

export default applicationRouter;