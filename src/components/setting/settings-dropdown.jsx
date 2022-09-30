import { useLayoutEffect, useState } from "react";

export const SettingsDropdown = () => {
    const [focusMode, setFocusMode] = useState(false); 
    const [clockFormat12, setClockFormat12] = useState(false);

    const clearAllDataHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem("init-step-2");
        localStorage.removeItem("username");
        localStorage.removeItem("clock-format-12");
        localStorage.removeItem("focus");
        localStorage.removeItem("isCompleted");
        localStorage.removeItem("links-list");
        localStorage.removeItem("events-list");
        localStorage.removeItem("todo-list");
        localStorage.removeItem("focus-mode");
        window.location.reload(false)
    }

    useLayoutEffect(() => {
        localStorage.setItem("focus-mode", focusMode);
        localStorage.setItem("clock-format-12", clockFormat12);
    }, [focusMode, clockFormat12]);

    return(
        <div className="sdd-wr fx-c">
            <div className="op-focus-mode fx-r fx-js-sb fx-al-c">
                <p className="txt-bold">Focus Mode</p>
                <label 
                    className="toggle"
                    htmlFor="focus-mode"
                >
                    <input 
                        id="focus-mode"
                        name="focus-mode"
                        type="checkbox"
                        value="focus-mode"
                        checked={focusMode}
                        onChange={() => setFocusMode(!focusMode)}
                    />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className="op-clock-format fx-c gap-2">
                <p className="txt-bold">Clock format</p>
                <div>
                    <label 
                        className="fx-r fx-al-c gap-2"
                        htmlFor="clock-format-12"
                    >
                        <input 
                            id="clock-format-12"
                            type="radio"
                            name="clock-format"
                            value="clock-format-12"
                            checked={clockFormat12}
                            onChange={() => setClockFormat12(!clockFormat12)}
                        /> 
                        <span>12 hour</span>
                    </label>
                    <label 
                        className="fx-r fx-al-c gap-2"
                        htmlFor="clock-format-24"
                    >
                        <input 
                            id="clock-format-24"
                            type="radio"
                            name="clock-format"
                            value="clock-format-12"
                            checked={!clockFormat12}
                            onChange={() => setClockFormat12(!clockFormat12)}
                        /> 
                        <span>24 hour</span>
                    </label>
                </div>
            </div>
            <button 
                className="settings-clr-btn btn-link"
                onClick={clearAllDataHandler}
            >
                Clear all data
            </button>
        </div>
    );
}