import "./todays-focus.css";
import { useState, useEffect } from "react";
import { useFocus } from "../../context";
import { getFormattedTime } from "../../utils";

export const TodaysFocus = () => {
    const { focusState, focusDispatch } = useFocus();
    const { focus, isEditing, isCompleted} = focusState;
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
            focusDispatch({ type: "SET_FOCUS", payload: inputValue });
            setInputValue("");
            focusDispatch({ type: "INIT_EDIT_FOCUS", payload: false })
        }
    }

    const editFocusHandler = () => {
        const prevFocus = localStorage.getItem("focus");
        setInputValue(prevFocus);
        focusDispatch({ type: "INIT_EDIT_FOCUS", payload: true })
    }

    useEffect(() => {
        const currentFocus = localStorage.getItem("focus");
        const isComppletedState = localStorage.getItem("isCompleted");
        focusDispatch({ type: "SET_FOCUS", payload: currentFocus ? currentFocus : ""});
        focusDispatch({ type: "UPDATED_COMPLETED_STATUS", payload: isComppletedState ? isComppletedState : false });
    }, [focusDispatch])

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
                    {
                        isCompleted ? 
                        <button 
                            className="focus-checked btn-icon"
                            onClick={() => focusDispatch({ type: "UPDATE_COMPLETED_STATE", payload: false })}
                        >
                            <span className="material-icons-outlined">check_box</span>
                        </button> :
                        <button 
                            className="focus-unchecked btn-icon"
                            onClick={() => focusDispatch({ type: "UPDATE_COMPLETED_STATE", payload: true })}
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
                            onClick={() => focusDispatch({ type: "DELETE_FOCUS"})}

                        >
                            <span className="material-icons">delete</span>
                        </button>
                    </div>
                </div>
                { isCompleted && <p className="tf-cheer">{cheer}</p>}
            </div>
        }
        </div>
    );
}