import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get("http://localhost:5000/tasks");
                setTasks(res.data);
            } catch (error) {
                console.error("Error fetching tasks", error);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div className="max-w-3xl p-6 mx-auto bg-white rounded shadow dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                All Tasks
            </h2>
            {tasks.length === 0 ? (
                <p className="text-gray-700 dark:text-gray-300">
                    No tasks found.
                </p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li
                            key={task._id}
                            className="p-4 mb-4 border rounded dark:border-gray-700"
                        >
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                {task.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {task.description}
                            </p>
                            <Link
                                to={`/dashboard/all-tasks/${task._id}`}
                                className="inline-block mt-2 text-blue-500 hover:underline"
                            >
                                Edit Task
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllTasks;
