import "./events.css";
import { useState } from "react";
import { AddEvents } from "./add-events";
import { EventsList } from "./events-list";
import { CountdownList } from "./countdown-list";

export const Events = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showEventList, setShowEventList] = useState(false);

    return(
        <div className="events-wr fx-r gap-3">
            <CountdownList />
            <button 
                className="comp-btn"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span className="comp-btn-i material-icons">event</span>
                <span>Events</span>
            </button>
            <div className={`events-dd comp-bg ${showDropdown ? "on" : "off"}`}>
            {
                showEventList ?
                <EventsList setShowEventList={setShowEventList} /> :
                <AddEvents setShowEventList={setShowEventList} />
            }
            </div>
        </div>
    );
}