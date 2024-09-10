import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Login from "./Login/Login";
import Order from "./Order/Order";
import Totals from "./Total/Totals";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Order",
    element: <Order />,
    errorElement: <Error />,
  },
  {
    path: "/total",
    element: <Totals />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
