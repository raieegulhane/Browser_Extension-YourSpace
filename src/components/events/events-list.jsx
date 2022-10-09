import { useList } from "../../context";
import { getFormattedDate, getFormattedTime } from "../../utils";

export const EventsList = ({ setShowEventList }) => {
    const { listState: { eventsList }, listDispatch } = useList();
  
    return(
        <div className={`el-wr fx-c ${eventsList.length === 0 && "fx-al-c"} gap-1`}>
            {
                eventsList.length > 0 &&
                <ul className="ll-list list-noBullets fx-c">
                {
                    eventsList.map(({ _id, name, timestamp }) => {
                        const eventDate = getFormattedDate(new Date(timestamp));
                        const eventTime = getFormattedTime(new Date(timestamp), false).time;
                        const eventMer = getFormattedTime(new Date(timestamp), false).ampm;

                        return(
                            <li 
                                className="ll-item el-item fx-r fx-al-c fx-js-sb"
                                key={_id}
                            >
                                <div className="fx-r fx-al-c gap-1">
                                    <span className="material-icons-outlined">
                                        notifications_active    
                                    </span>
                                    <div>
                                        <p>{name}</p>
                                        <p className="txt-sm txt-gray fx-r fx-al-c">{eventDate} | {eventTime} {eventMer}</p>
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
                    onClick={() => setShowEventList(false)}
                >
                    <span className="txt-sm">Add new events</span>
                    <span className="al-btn-i material-icons-outlined">add</span>
                </button> :
                <p>Max. 3 events can be added</p>
            }
        </div>
    );
}