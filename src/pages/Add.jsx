import useLogin from "@/hooks/useLogin";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const { user } = useLogin();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [category, setCategory] = useState("To-Do");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            category,
            email: user.email,
            timestamp: new Date().toLocaleString(),
            taskID: Date.now(),
        };
        try {
            await axios.post(
                "https://backend-teal-five-18.vercel.app/task",
                newTask
            );
            navigate("/dashboard/task-board");
            console.log(newTask);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-md p-6 mx-auto bg-white rounded shadow dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Add New Task
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                {/* Type */}

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-100"
                >
                    <option value="To-Do">To-Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                <button
                    type="submit"
                    className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default Add;
