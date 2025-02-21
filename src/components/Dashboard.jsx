import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="p-4 text-white bg-blue-600">
                <div className="container flex items-center justify-between mx-auto">
                    <h1 className="text-xl font-bold">Task Manager</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="add-task"
                                className={({ isActive }) =>
                                    isActive ? "underline font-semibold" : ""
                                }
                            >
                                Add Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="all-tasks"
                                className={({ isActive }) =>
                                    isActive ? "underline font-semibold" : ""
                                }
                            >
                                All Tasks
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="container p-4 mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
