import { useLayoutEffect, useState } from "react";
import { useList } from "../../context";
import { AddTodo } from "./add-todo";
import { TodoList } from "./todo-list";
import "./todo.css";

export const Todo = () => {
    const [showDropdown, setShowDropdown] = useState();
    const { listState: { todoList }} = useList();

    useLayoutEffect(() => {
        localStorage.setItem("todo-list", JSON.stringify(todoList));
    }, [todoList]);

    return(
        <div className="todo-wr">
            <button 
                className="comp-btn"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span className="comp-btn-i material-icons-outlined">checklist</span>
                <span>Todo</span>
            </button>
            <div className={`todo-dd comp-bg ${showDropdown ? "on" : "off"}`}>
                <TodoList />
                <AddTodo />
            </div>
        </div>
    );
}