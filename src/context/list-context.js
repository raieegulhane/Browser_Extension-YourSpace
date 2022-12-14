import { createContext, useContext, useReducer, useEffect } from "react";
import { initialListValues, listReducerFunction } from "../reducers";

const ListContext = createContext(initialListValues);

const ListProvider = ({ children }) => {
    const [listState, listDispatch] = useReducer(listReducerFunction, initialListValues);
    
    useEffect(() => {
        const linksList = JSON.parse(localStorage.getItem("links-list")) || [];
        const eventsList = JSON.parse(localStorage.getItem("events-list")) || [];
        const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];   
        listDispatch({
            type: "SET_LISTS",
            payload: {
                linksList,
                eventsList,
                todoList
            }
        })
    }, [])

    return(
        <ListContext.Provider value={{ listState, listDispatch }}>
            { children }
        </ListContext.Provider>
    );
}

const useList = () => useContext(ListContext);

export { ListProvider, useList };