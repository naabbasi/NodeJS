import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Flowbite, Spinner} from "flowbite-react";
import {RouterProvider} from "react-router-dom";
import applicationRouter from "./router";


const container = document.getElementById("root");

if (container) {
    const theme = {
        sidebar: {
            base: "h-full bg-inherit",
            inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3"
        }
    };

    ReactDOM.createRoot(container as HTMLElement).render(
        <Flowbite theme={{theme}}>
            <React.StrictMode>
                <RouterProvider router={applicationRouter} />
            </React.StrictMode>
        </Flowbite>
    );
}