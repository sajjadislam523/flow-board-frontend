import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Edit = () => {
    const task = useLoaderData();
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTask = { title, description, category: task.category };
        try {
            await axios.patch(
                `http://localhost:5000/task/${task._id}`,
                updatedTask
            );
            navigate("/dashboard/all-tasks");
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    return (
        <div className="max-w-md p-6 mx-auto bg-white rounded shadow dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Edit Task
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-100"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-100"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default Edit;
