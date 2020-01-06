import * as React from "react";

interface AppProps {
    children: React.ReactNode;
}

export const loadState = () => {

    try {
        const storedState = localStorage.getItem("todoTasks");
        return (storedState && JSON.parse(storedState)) || undefined;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    localStorage.setItem("todoTasks", JSON.stringify(state));
    return true;     
};
