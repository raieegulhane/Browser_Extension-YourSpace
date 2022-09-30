import { useEffect } from "react";
import { useList } from "../../../context";
import { countdownTimer } from "../../../utils";

export const Countdown = ({ eventItem, currTime }) => {
    const { _id, event, timestamp } = eventItem;
    const { listDispatch } = useList();
    let { countdown, deleteEvent} = (countdownTimer(timestamp, currTime));

    useEffect(() => {
        if (deleteEvent) {
            listDispatch({ type: "DELETE_EVENT", payload: _id });
        }
    },[deleteEvent]);

    return(
        <div className="cd-wr fx-c fx-al-c">
            <p className="counter">{countdown}</p>
            <p className="txt-sm">{event}</p>
        </div>
    );
}