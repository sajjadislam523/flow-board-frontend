import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, description, category: "To Do" };
        try {
            await axios.post("http://localhost:5000/task", newTask);
            navigate("/dashboard/all-tasks");
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
