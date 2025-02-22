import Loading from "@/components/Loading";
import ThemeToggle from "@/components/ThemeToggle";
import useLogin from "@/hooks/useLogin";
import { useState } from "react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const { user, loading, logOut } = useLogin();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="p-4 bg-gray-800 border-b border-gray-700 dark:bg-gray-900">
                <div className="container mx-auto">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between md:hidden">
                        <h1 className="text-xl font-bold text-gray-100 dark:text-gray-200">
                            Flow Board
                        </h1>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-300 hover:text-white"
                        >
                            {isMenuOpen ? (
                                <FiX size={24} />
                            ) : (
                                <FiMenu size={24} />
                            )}
                        </button>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-4">
                        <h1 className="text-xl font-bold text-gray-100 dark:text-gray-200">
                            Flow Board
                        </h1>

                        <ul className="flex space-x-4">
                            <li>
                                <NavLink
                                    to="add-task"
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            isActive
                                                ? "bg-gray-700 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                        }`
                                    }
                                >
                                    Add Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="task-board"
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            isActive
                                                ? "bg-gray-700 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                        }`
                                    }
                                >
                                    Tasks
                                </NavLink>
                            </li>
                        </ul>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-300 truncate max-w-[120px]">
                                    {user.displayName}
                                </span>
                                <ThemeToggle />
                                <button
                                    onClick={logOut}
                                    className="p-2 text-gray-300 transition-colors hover:text-red-400"
                                    title="Logout"
                                >
                                    <FiLogOut size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mt-4 md:hidden">
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <NavLink
                                        to="add-task"
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                                isActive
                                                    ? "bg-gray-700 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            }`
                                        }
                                    >
                                        Add Task
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="task-board"
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                                isActive
                                                    ? "bg-gray-700 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            }`
                                        }
                                    >
                                        Tasks
                                    </NavLink>
                                </li>
                                <li className="flex items-center justify-between px-4 py-2">
                                    <span className="text-sm text-gray-300">
                                        {user.displayName}
                                    </span>
                                    <ThemeToggle />
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            logOut();
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors rounded-md hover:bg-gray-700 hover:text-white"
                                    >
                                        <FiLogOut className="mr-2" size={16} />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            <main className="container p-4 mx-auto text-gray-800 dark:text-gray-200">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
