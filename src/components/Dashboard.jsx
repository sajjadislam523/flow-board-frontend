import ThemeToggle from "@/components/ThemeToggle";
import useLogin from "@/hooks/useLogin";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const { user, loading } = useLogin();

    if (loading) {
        return <p>Loading...</p>;
    }
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
                                to="task-board"
                                className={({ isActive }) =>
                                    isActive ? "underline font-semibold" : ""
                                }
                            >
                                Tasks
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <p className="text-center text-gray-600 dark:text-gray-300">
                            Welcome, {user.displayName}!
                        </p>
                    </div>
                </div>
            </nav>
            <main className="container p-4 mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
