import Dashboard from "@/components/Dashboard";
import Add from "@/pages/Add";
import Edit from "@/pages/Edit";
import TaskBoard from "@/pages/TaskBoard";
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
            // {
            //     path: "all-tasks",
            //     element: <AllTasks />,
            // },
            {
                path: "task-board/:id",
                element: <Edit />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/task/${params.id}`),
            },
            {
                path: "task-board",
                element: <TaskBoard />,
            },
        ],
    },
]);

export default routes;
