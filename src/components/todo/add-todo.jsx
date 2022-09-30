import { useState } from "react";
import { useList } from "../../context";

export const AddTodo = () => {
    const [newTodo, setNewTodo] = useState("");
    const { listDispatch } = useList();

    const addTodoHandler = (e) => {
        if (e.key === "Enter" && newTodo) {
            listDispatch({ type: "ADD_TODO", payload: newTodo })
            setNewTodo("");
        }
    }

    return(
        <label htmlFor="todo">
            <input 
                id="todo"
                className="dd-inp"
                name="todo"
                type="text"
                placeholder="+ New todo"
                autoComplete="false"
                required
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={addTodoHandler}
            />
        </label>
    );
}