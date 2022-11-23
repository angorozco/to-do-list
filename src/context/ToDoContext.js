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

    return <Provider value={{ tasks }}>{children}</Provider>;
};

export default ToDoProvider;
