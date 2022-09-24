import "./todays-focus.css";
import { useState, useReducer, useEffect } from "react";
import { initialFocusState, focusReducerFunction } from "../../reducers/focus-reducer";

export const TodaysFocus = () => {
    const [state, dispatch] = useReducer(focusReducerFunction, initialFocusState);
    const { focus, isEditing, isCompleted} = state;
    const [inputValue, setInputValue] = useState("");
    const cheerList = [
		"You did it!! 🎉",
        "Good job!!! ✨",
        "Wohoo!! Task completed! 🥳",
        "Keep it up!! 🙌",
        "You rock!!! 🤘"
	];
    const cheer = cheerList[Math.floor(Math.random() * 4)];

    const submitFocusHandler = (event) => {
        if (event.key === "Enter" && inputValue) {
            dispatch({ type: "SET_FOCUS", payload: inputValue });
            setInputValue("");
            dispatch({ type: "INIT_EDIT_FOCUS", payload: false })
        }
    }

    const editFocusHandler = () => {
        const prevFocus = localStorage.getItem("focus");
        setInputValue(prevFocus);
        dispatch({ type: "INIT_EDIT_FOCUS", payload: true })
    }

    useEffect(() => {
        const currentFocus = localStorage.getItem("focus");
        const isComppletedState = localStorage.getItem("isCompleted");
        dispatch({ type: "SET_FOCUS", payload: currentFocus ? currentFocus : ""});
        dispatch({ type: "UPDATED_COMPLETED_STATUS", payload: isComppletedState ? isComppletedState : false })
    }, [])

    return(
        <div className="tf-wr">
        {
            (!focus || isEditing) ?
            <div className="fx-c fx-al-c">
                <p className="tf-que-txt">What is your main focus for today?</p>
                <input 
                    className="tf-inp inp"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={submitFocusHandler}
                />
            </div> :
            <div className="fx-c fx-al-c">
                <h3 className="tf-heading">TODAY'S FOCUS</h3>
                { isCompleted && <p className="tf-cheer">{cheer}</p>}
                <div className="tf-task-cn fx-r fx-js-sb fx-al-c">
                    {
                        isCompleted ? 
                        <button 
                            className="btn-icon"
                            onClick={() => dispatch({ type: "UPDATE_COMPLETED_STATE", payload: false })}
                        >
                            <span className="material-icons-outlined">check_box</span>
                        </button> :
                        <button 
                            className="btn-icon"
                            onClick={() => dispatch({ type: "UPDATE_COMPLETED_STATE", payload: true })}
                        >
                            <span className="material-icons-outlined">check_box_outline_blank</span>
                        </button>
                        
                    }

                    <p className={`tf-task ${isCompleted && "tf-task-completed"}`}>{focus}</p>

                    <div className="tf-btn-cn fx-r fx-al-c">
                        <button 
                            className="btn-icon"
                            onClick={editFocusHandler}
                        >
                            <span className="material-icons">edit</span>
                        </button>
                        <button 
                            className="btn-icon"
                            onClick={() => dispatch({ type: "DELETE_FOCUS"})}

                        >
                            <span className="material-icons">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        }
        </div>
    );
}