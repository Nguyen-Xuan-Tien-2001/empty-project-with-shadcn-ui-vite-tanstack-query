import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/Login.js";
import React from "react";
import App from "./App.js";
import { AuthControl } from "./pages/AuthControl.js";
import UnauthorizedPage from "./pages/UnauthorizedPage.js";
import { HomePage } from "./pages/Home.js";

const routes = [
  {
    path: "/",
    element: (
      <AuthControl>
        <App />
      </AuthControl>
    ),
    handle: { icon: "null", title: "Main" },
    children: [
      {
        path: "/home",
        element: <HomePage />,
        handle: { icon: "list-alt-solid", title: "Todo" },
      },
      {
        path: "*",
        element: <UnauthorizedPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    handle: { icon: "null", title: "Login" },
    children: [],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
