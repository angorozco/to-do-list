import React, { useState, useContext, createContext } from "react";

const ToDoContext = createContext([]);
const { Provider } = ToDoContext;
export const useToDoContext = () => useContext(ToDoContext);

const ToDoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

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

    const handleTaskState = (id) =>
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, completed: !task.completed }
                    : task;
            })
        );

    return (
        <Provider value={{ handleTasks, removeTask, handleTaskState, tasks }}>
            {children}
        </Provider>
    );
};

export default ToDoProvider;
