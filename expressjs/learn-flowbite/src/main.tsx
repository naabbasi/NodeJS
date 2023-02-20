import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Flowbite } from "flowbite-react";

const container = document.getElementById("root");

if (container) {
  const theme = {
    sidebar: {
      base: "h-full bg-inherit",
      inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3"
    }
  };

  ReactDOM.createRoot(container as HTMLElement).render(
    <Flowbite theme={{ theme }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Flowbite>
  );
}