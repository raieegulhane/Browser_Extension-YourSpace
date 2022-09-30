import "./events-list.css";
import { useList } from "../../../context";
import { getFormattedDate, getFormattedTime } from "../../../utils";

export const EventsList = ({ setShowAddEvents }) => {
    const { listState: { eventsList }, listDispatch } = useList();

    return(
        <div className={`ll-wr fx-c ${eventsList.length === 0 && "fx-al-c"} gap-1`}>
            {
                eventsList.length > 0 &&
                <ul className="ll-list list-noBullets fx-c">
                {
                    eventsList?.map(({ _id, event, timestamp }) => {
                        return(
                            <li 
                                className="ll-item fx-r fx-js-sb fx-al-c"
                                key={_id}
                            >
                                <div className="event-cn fx-r fx-al-c gap-2">
                                    <span className="material-icons-outlined">notifications_none</span>
                                    <div className="fx-c">
                                        <p>{event}</p>
                                        <p className="txt-sm txt-gray">{getFormattedDate(new Date(timestamp))} ({getFormattedTime(new Date(timestamp))})</p>
                                    </div>
                                </div>
                                <button 
                                    className="ll-btn-del btn-icon"
                                    onClick={() => listDispatch({type: "DELETE_EVENT", payload: _id})}
                                >
                                    <span className="txt-sm material-icons-outlined">close</span>
                                </button>
                            </li>
                        );
                    })
                }
                </ul>
            }
            {
                eventsList.length < 3 ? 
                <button 
                    className="btn btn-outline btn-wt-i btn-cr al-btn"
                    onClick={() => setShowAddEvents(true)}
                >
                    <span className="txt-sm">Add new event</span>
                    <span className="al-btn-i material-icons-outlined">add</span>
                </button> :
                <p className="txt-center">Max. 3 events can be added.</p>
            }
        </div>
    );
}