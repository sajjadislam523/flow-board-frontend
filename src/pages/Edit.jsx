import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Edit = () => {
    const task = useLoaderData();
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);
        const updatedTask = { title, description, category: task.category };

        try {
            await axios.patch(
                `https://backend-teal-five-18.vercel.app/task/${task._id}`,
                updatedTask
            );
            navigate("/dashboard/task-board");
        } catch (error) {
            console.error("Error updating task:", error);
            setError("Failed to update task. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Tasks
                </button>

                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center mb-6">
                        <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900/50">
                            <svg
                                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </div>
                        <h2 className="ml-3 text-2xl font-bold text-gray-800 dark:text-gray-100">
                            Edit Task
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Task Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-500"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Enter task title"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-500"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Describe your task..."
                            />
                        </div>

                        {error && (
                            <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900/20 dark:text-red-300">
                                {error}
                            </div>
                        )}

                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50"
                            >
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
