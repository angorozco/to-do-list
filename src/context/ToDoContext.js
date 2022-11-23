import React, { useState, useContext, createContext } from "react";

const ToDoContext = createContext([]);
const { Provider } = ToDoContext;
export const useToDoContext = () => useContext(ToDoContext);

const INITIAL_VALUE = [
    { id: 1, content: "to do 1", completed: false },
    {
        id: 2,
        content: "to do 2 ",
        completed: false,
    },
];

const ToDoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(INITIAL_VALUE);

    const isInTasks = (id) => tasks.some((task) => task.id === id);

    const handleTasks = (newTask) => {
        if (isInTasks(newTask.id)) {
            setTasks(
                tasks.map((task) => {
                    return task.id === newTask.id
                        ? { ...task, content: newTask.content }
                        : task;
                })
            );
        } else {
            setTasks([...tasks, newTask]);
        }
    };

    const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

    return (
        <Provider value={{ handleTasks, removeTask, tasks }}>
            {children}
        </Provider>
    );
};

export default ToDoProvider;
