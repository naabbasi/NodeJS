import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import React, { lazy } from "react";

const UserComponent = lazy(() => import("./components/UserComponent"));

/*const applicationRouter = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "dashboard", element: <div>Dashboard</div>},
            {path: "layout", element: <div>Layout</div>},
        ]
    },
]);*/

const applicationRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashboard" element={
        <div className="flex items-center justify-between container mx-auto">
          <div>
            <h1 className="text-4xl font-semibold">Project Title</h1>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">Project Title</h1>
          </div>
        </div>
      } />
      <Route path="/layout"
             element={<div className="flex items-center justify-center h-full">Layout</div>} />
      <Route path="/users" element={<UserComponent />} />
    </Route>
  )
);

export default applicationRouter;