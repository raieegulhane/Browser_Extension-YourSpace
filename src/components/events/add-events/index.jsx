import "./add-events.css";
import { useState } from "react";
import { useList } from "../../../context";
import { inpTimestampFormat } from "../../../utils";

export const AddEvents = ({ setShowAddEvents }) => {
    const [newEvent, setNewEvent] = useState({ eventName: "", eventTimestamp: ""});
    const { eventName, eventTimestamp } = newEvent;
    const [warning, setWarning] = useState(false);
    const { listState: { eventsList },  listDispatch } = useList(); 

    const addEventHandler = (e) => {
        e.preventDefault();
        if (!eventName || !eventTimestamp ) {
            return setWarning(true);
        }
        listDispatch({ type: "ADD_EVENT", payload: { event: eventName, timestamp: eventTimestamp }})
        setShowAddEvents(false);
    }

    return(
        <div className="events-wr fx-c">
            <div className="fx-r fx-al-c fx-js-sb">
            {
                eventsList.length > 0 &&
                <button 
                    className="link-back-btn btn-icon"
                    onClick={() => setShowAddEvents(false)}
                >
                    <span className="back-icon material-icons-outlined">arrow_back</span>
                </button>
            }
            {
                warning &&
                <p className="fx-r fx-al-c txt-red gap-2">
                    <span className="warn-i material-icons">error_outline</span>
                    <span className="txt-sm txt-bold">Empty fields</span>
                </p>
            }
            </div>
            
            <form className="al-inp-wr fx-c">
                <label 
                    className="al-label"
                    htmlFor="event-name"
                >
                    Name
                    <input 
                        id="event-name"
                        className="dd-inp"
                        name="event-name"
                        type="text"
                        autoComplete="false"
                        required
                        value={eventName}
                        onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
                    />
                </label>
                <label 
                    className="al-label"
                    htmlFor="event"
                >
                    Date and Time
                    <input 
                        id="event"
                        className="dd-inp event-inp"
                        name="event"
                        type="datetime-local"
                        min={inpTimestampFormat(new Date())}
                        required
                        value={eventTimestamp}
                        onChange={(e) => setNewEvent({ ...newEvent, eventTimestamp: e.target.value })}
                    />
                </label>
                <button 
                    className="btn btn-outline btn-wt-i btn-cr al-btn"
                    type="submit"
                    onClick={addEventHandler}
                >
                    <span className="txt-sm">Add</span>
                    <span className="al-btn-i material-icons-outlined">add</span>
                </button>
            </form>
        </div>
    );
}