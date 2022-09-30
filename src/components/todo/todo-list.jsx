import { useList } from "../../context";

export const TodoList = () => {
    const { listState: { todoList }, listDispatch } = useList();

    return(
        <ul className="ll-list todo-list-wr fx-c list-noBullets gap-2">
        {
            todoList.map(({ _id, todo, isCompleted }) => {
                return(
                    <li className="ll-item fx-r fx-al-c fx-js-sb">
                        <label 
                            className="fx-r fx-al-c gap-2"                    
                            htmlFor={todo}
                            key={_id}
                        >
                            <input
                                id={todo}
                                name={`todo-${todo}`}
                                type="checkbox" 
                                value={todo}
                                checked={isCompleted}
                                onChange={() => listDispatch({ type: "TODO_COMPLETED_TOGGLE", payload: _id })}
                            />
                            {todo}
                        </label>
                        <button 
                            className="ll-btn-del btn-icon"
                            onClick={() => listDispatch({ type: "DELETE_TODO", payload: _id })}
                        >
                            <span className="txt-sm material-icons-outlined">
                                close
                            </span>
                        </button>
                    </li>
                );
            })
        }
        </ul>
    );
}