import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import { AuthControl } from "./pages/AuthControl.js";
import UnauthorizedPage from "./pages/UnauthorizedPage.js";
import LoginPage from "./pages/Login.js";
import { TableContent } from "./components/contents/Table.js";

const routes = [
  {
    path: "/",
    element: (
      <AuthControl>
        <App />
      </AuthControl>
    ),
    handle: { icon: "null", title: "Dashboard" },
    children: [
      {
        path: "/account-manager",
        element: <TableContent />,
        handle: { icon: "null", title: "Account Manager" },
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    handle: { icon: "null", title: "Login" },
    children: [],
  },
  {
    path: "*",
    element: <UnauthorizedPage />,
  },
];

const router = createBrowserRouter([...routes]);
export default router;
