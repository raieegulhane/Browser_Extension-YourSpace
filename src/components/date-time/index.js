import "./date-time.css";
import { useState, useEffect } from "react";
import { getFormattedDate, getFormattedTime, greetings } from "../../utils";

export const DateTime = () => {
    const [currTimestamp, setCurrTimestamp] = useState(new Date());
    const date = (getFormattedDate(currTimestamp));
    const time = (getFormattedTime(currTimestamp));
    const userGreeting = greetings(currTimestamp);
    const username = localStorage.getItem("username");
    
    useEffect(() => {
		setInterval(() => {
			setCurrTimestamp(new Date());
		}, 1000);
	}, []);

    return(
        <div className="td-wr fx-c fx-al-c">
            <div className="date">{date}</div>
            <div className="time">{time}</div>
            <p className="greetings">Good {userGreeting}, {username}.</p>
        </div>
    );
}