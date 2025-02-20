import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "dashboard",
        element: <div>Dashboard</div>,
    },
]);

export default routes;
