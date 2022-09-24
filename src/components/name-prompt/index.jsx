import { useState } from "react";
import "./name-prompt.css";

export const NamePrompt = ({ img }) => {
    const [name, setName] = useState("");
    const [warning, setWarning] = useState(false);

    const inputChangeHandler = (event) => {
        const { value } = event.target;
        if (value) {
            setWarning(false);
        } 
        setName(value);
    }

    const updateNameHandler = () => {
        if(name) {
            localStorage.setItem("username", name);
            window.location.reload(false);
        } else {
            setWarning(true);
        }
    }

    return(
        <div className="np-wr fx-c fx-al-c fx-js-c">
            <img 
                className="np-img"
                src={img}
                alt="yourspace-logo"
            />
            <div className="np-cn fx-c fx-al-c">
                <p className="np-prompt">Hello! What should we call you?</p>
                <input 
                    className="np-inp"
                    type="txt"
                    value={name}
                    onChange={(e) => inputChangeHandler(e)}
                />
                {
                    warning &&
                    <p>Please enter your name to continue.</p>
                }
                <button 
                    className="np-btn btn btn-outline btn-cr btn-wt-i"
                    onClick={updateNameHandler}
                >
                    Continue
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    );
}