import "./date-time.css";
import { useState, useEffect } from "react";
import { useSetting } from "../../context";
import { getFormattedDate, getFormattedTime, greetings } from "../../utils";

export const DateTime = () => {
    const { settingState: { clockFormat12, focusMode } } = useSetting();
    const [currTimestamp, setCurrTimestamp] = useState(new Date());
    const date = (getFormattedDate(currTimestamp));
    const { time, ampm } = (getFormattedTime(currTimestamp, clockFormat12));
    const userGreeting = greetings(currTimestamp);
    const username = localStorage.getItem("username");
    
    useEffect(() => {
		setInterval(() => {
			setCurrTimestamp(new Date());
		}, 1000);
	}, []);

    return(
        <div className="td-wr fx-c fx-al-c">
            <p className={`txt-bold focus-mode-on fx-c gap-1 ${focusMode ? "focus-off" : "focus-on"}`}>FOCUS MODE: ON</p>
            <div className="date">{date}</div>
            <div><span className="time">{time}</span><span>{clockFormat12 && ampm}</span></div>
            <p className={`greetings ${focusMode ? "focus-on" : "focus-off"}`}>Good {userGreeting}, {username}.</p>
        </div>
    );
}