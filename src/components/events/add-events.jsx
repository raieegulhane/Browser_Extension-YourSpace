import { useLayoutEffect, useState } from "react";
import { useList } from "../../context";

export const AddEvents = ({ setShowEventList }) => {
    const [warning, setWarning] = useState(false);
    const [newEvent, setNewEvent] = useState({ eventName: "", eventTimestamp: "" });
    const { eventName, eventTimestamp } = newEvent;
    const { listState: { eventsList }, listDispatch} = useList();

    const addEventHandler = (e) => {
        e.preventDefault();

        if (!eventName || !eventTimestamp) {
            setWarning(true);
        } else {
            listDispatch({
                type: "ADD_EVENT", 
                payload: {
                    name: eventName, 
                    timestamp: eventTimestamp 
                }
            });
            setShowEventList(true);
        }
    }

    useLayoutEffect(() => {
        localStorage.setItem("events-list", JSON.stringify(eventsList));
    }, [eventsList]);

    return(
        <div className="ae-wr fx-c gap-1">
            <div className="fx-r fx-al-c fx-js-sb">
            {
                eventsList.length > 0 &&
                <button 
                    className="link-back-btn btn-icon"
                    onClick={() => setShowEventList(true)}
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
            <form className="fx-c gap-3">
                <label 
                    className="fx-c"
                    htmlFor="event-name"
                >
                    Event:
                    <input 
                        id="event-name"
                        className="dd-inp"
                        name="event-name"
                        type="text"
                        required
                        value={eventName}
                        onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
                    />
                </label>
                <label 
                    className="fx-c"
                    htmlFor="event-date"
                >
                    Date and Time:
                    <input 
                        id="event-date"
                        className="dd-inp ae-inp"
                        name="event-date"
                        type="datetime-local"
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