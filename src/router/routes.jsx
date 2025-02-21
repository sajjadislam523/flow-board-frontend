import Dashboard from "@/components/Dashboard";
import Add from "@/pages/Add";
import AllTasks from "@/pages/AllTasks";
import Edit from "@/pages/Edit";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "add-task",
                element: <Add />,
            },
            {
                path: "all-tasks",
                element: <AllTasks />,
            },
            {
                path: "all-tasks/:id",
                element: <Edit />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/task/${params.id}`),
            },
        ],
    },
]);

export default routes;
