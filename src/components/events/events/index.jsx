import "./events.css";
import { useLayoutEffect, useState } from "react";
import { AddEvents, EventsList } from "..";
import { useList } from "../../../context";

export const Events = () => {
    const { listState: { eventsList } } = useList();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showAddEvents, setShowAddEvents] = useState(eventsList.length > 0 ? false : true);

    useLayoutEffect(() => {
        localStorage.setItem("events-list", JSON.stringify(eventsList));
    },[eventsList]);

    return(
        <div className="events-wr">
            <button 
                className="comp-btn"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span className="comp-btn-i material-icons">event</span>
                <span>Events</span>
            </button>
            <div className={`events-dd comp-bg ${showDropdown ? "on" : "off"}`}>
            {
                showAddEvents ?
                <AddEvents setShowAddEvents={setShowAddEvents} /> :
                <EventsList setShowAddEvents={setShowAddEvents} />
            }
            </div>
        </div>
    );
}