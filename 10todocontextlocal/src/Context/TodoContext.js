import { createContext, useContext }  from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id:1,
            title: "Todo 1",
            completed: false
        },
    ],
    addTodo: (Todo) => {},
    updateTodo: (id, Todo) => {},
    deleteTodo: (id) => {},
    ToggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;