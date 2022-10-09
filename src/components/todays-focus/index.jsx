import "./todays-focus.css";
import { useState, useLayoutEffect, useReducer } from "react";
import { initialFocusState, focusReducerFunction } from "../../reducers";

export const TodaysFocus = () => {
    const [focusState, focusDispatch] = useReducer(focusReducerFunction, initialFocusState);
    const { focus, isEditing, isCompleted } = focusState;
    const [inputValue, setInputValue] = useState("");
    const[showCheer, setShowCheer] = useState(false);

    const submitFocusHandler = (event) => {
        if (event.key === "Enter" && inputValue) {
            focusDispatch({ type: "SET_FOCUS", payload: inputValue });
            setInputValue("");
            focusDispatch({ type: "INIT_EDIT_FOCUS", payload: false })
        }
    }

    const editFocusHandler = () => {
        const prevFocus = JSON.parse(localStorage.getItem("focus"));
        setInputValue(prevFocus);
        focusDispatch({ type: "INIT_EDIT_FOCUS", payload: true })
    }

    useLayoutEffect(() => {
        if (isCompleted) {
            setShowCheer(true);
            setTimeout(() => {
                setShowCheer(false);
            }, 1000); 
        } else {
            setShowCheer(false);
        }
    }, [isCompleted]);

    useLayoutEffect(() => {
        const savedFocus = localStorage.getItem("focus");
        const savedIsCompleted = localStorage.getItem("isCompleted");
        focusDispatch({ type: "SET_FOCUS", payload: !savedFocus ? "" : JSON.parse(savedFocus) });
        focusDispatch({ type: "UPDATE_COMPLETED_STATE", payload: !savedIsCompleted ? false : JSON.parse(savedIsCompleted)})
    }, [focusDispatch]);

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
                <div className="tf-task-cn fx-r fx-js-sb fx-al-c">
                    <label className="fx-r gap-1 tf-label-cb">
                        <input 
                            className="tf-inp-cb"
                            type="checkbox" 
                            name="todays-focus"
                            checked={isCompleted}
                            value={isCompleted}
                            onChange={() => focusDispatch({ type: "UPDATE_COMPLETED_STATE", payload: !isCompleted })}
                        />
                        <span className="checkmark"></span>
                        <span className={`tf-task ${isCompleted ? "completed" : "not-completed"}`}>{focus}</span>
                    </label>
                    <div className="tf-btn-cn fx-r fx-al-c gap-2">
                        <button 
                            className="btn-icon"
                            onClick={editFocusHandler}
                        >
                            <span className="tf-btn-i material-icons">edit</span>
                        </button>
                        <button 
                            className="btn-icon"
                            onClick={() => focusDispatch({ type: "DELETE_FOCUS"})}
                        >
                            <span className="tf-btn-i material-icons">delete</span>
                        </button>
                    </div>
                </div>
                <p className={`tf-cheer ${showCheer ? "show-cheer" : "hide-cheer"}`}>
                    Task completed!🤘
                </p>
            </div>
        }
        </div>
    );
}