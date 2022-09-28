import { createContext, useContext, useReducer, useEffect } from "react";
import { initialListValues, listReducerFunction } from "../reducers";

const ListContext = createContext(initialListValues);

const ListProvider = ({ children }) => {
    const [listState, listDispatch] = useReducer(listReducerFunction, initialListValues);
    
    useEffect(() => {
        const linksList = JSON.parse(localStorage.getItem("link-list")) || [];
        listDispatch({ type: "SET_LINKS_LIST", payload: linksList });

        
        const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];
        listDispatch({ type: "SET_TODO_LIST", payload: todoList });
    })

    return(
        <ListContext.Provider value={{ listState, listDispatch }}>
            { children }
        </ListContext.Provider>
    );
}

const useList = () => useContext(ListContext);

export { ListProvider, useList };