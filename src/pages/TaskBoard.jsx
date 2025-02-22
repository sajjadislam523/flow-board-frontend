import Loading from "@/components/Loading";
import useLogin from "@/hooks/useLogin";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";

const TaskBoard = () => {
    const { user, loading } = useLogin();

    const {
        data: tasks = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `https://backend-teal-five-18.vercel.app/tasks/${user?.email}`
            );
            return res.data;
        },
    });

    const [taskColumns, setTaskColumns] = useState({
        "To-Do": [],
        "In Progress": [],
        Done: [],
    });

    useEffect(() => {
        const columns = {
            "To-Do": tasks.filter((task) => task.category === "To-Do"),
            "In Progress": tasks.filter(
                (task) => task.category === "In Progress"
            ),
            Done: tasks.filter((task) => task.category === "Done"),
        };
        setTaskColumns(columns);
    }, [tasks]);

    const updateTaskMutation = useMutation({
        mutationFn: async (updatedTask) => {
            await axios.put(
                `https://backend-teal-five-18.vercel.app/tasks/category/${updatedTask._id}`,
                {
                    category: updatedTask.category,
                }
            );
        },
        onSuccess: () => refetch(),
    });

    const deleteTaskMutation = useMutation({
        mutationFn: async (taskId) => {
            await axios.delete(
                `https://backend-teal-five-18.vercel.app/task/${taskId}`
            );
        },
        onSuccess: () => refetch(),
    });

    const handleDelete = (taskId) => {
        deleteTaskMutation.mutate(taskId);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const sourceColumn = [...taskColumns[source.droppableId]];
        const destColumn = [...taskColumns[destination.droppableId]];

        if (source.droppableId === destination.droppableId) {
            const [movedTask] = sourceColumn.splice(source.index, 1);
            sourceColumn.splice(destination.index, 0, movedTask);
            setTaskColumns({
                ...taskColumns,
                [source.droppableId]: sourceColumn,
            });
            return;
        }

        const [movedTask] = sourceColumn.splice(source.index, 1);
        movedTask.category = destination.droppableId; // Fixed: Changed 'status' to 'category'
        destColumn.splice(destination.index, 0, movedTask);

        setTaskColumns({
            ...taskColumns,
            [source.droppableId]: sourceColumn,
            [destination.droppableId]: destColumn,
        });

        updateTaskMutation.mutate(movedTask);
    };

    if (loading || isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-base-100">
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <h1 className="ml-4 text-xl font-bold text-center">
                        Task Board
                    </h1>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.keys(taskColumns).map((status) => (
                        <Droppable key={status} droppableId={status}>
                            {(provided) => (
                                <div
                                    className="flex-1 min-w-[300px] bg-base-200 rounded-lg shadow-lg p-4"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <h2 className="p-2 mb-4 text-lg font-bold rounded-md bg-base-300">
                                        {status} ({taskColumns[status].length})
                                    </h2>
                                    <div className="space-y-2">
                                        {taskColumns[status].map(
                                            (task, index) => (
                                                <Draggable
                                                    key={task._id}
                                                    draggableId={task._id.toString()}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            className="p-3 transition-shadow rounded-md shadow-sm bg-base-100 hover:shadow-md"
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <div>
                                                                    <h3 className="font-medium">
                                                                        {
                                                                            task.title
                                                                        }
                                                                    </h3>
                                                                    {task.description && (
                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                            {
                                                                                task.description
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                                <div className="flex gap-2">
                                                                    <Link
                                                                        to={`/dashboard/task-board/${task._id}`}
                                                                        className="btn btn-xs btn-square btn-ghost"
                                                                    >
                                                                        ✏️
                                                                    </Link>
                                                                    <button
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                task._id
                                                                            )
                                                                        }
                                                                        className="btn btn-xs btn-square btn-ghost text-error"
                                                                    >
                                                                        🗑️
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            )
                                        )}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
};

export default TaskBoard;
