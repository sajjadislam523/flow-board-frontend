import Dashboard from "@/components/Dashboard";
import Add from "@/pages/Add";
import Edit from "@/pages/Edit";
import TaskBoard from "@/pages/TaskBoard";
import PrivateRoute from "@/router/PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: "add-task",
                element: <Add />,
            },
            {
                path: "task-board/:id",
                element: <Edit />,
                loader: ({ params }) =>
                    fetch(
                        `https://backend-teal-five-18.vercel.app/task/${params.id}`
                    ),
            },
            {
                path: "task-board",
                element: <TaskBoard />,
            },
        ],
    },
]);

export default routes;
