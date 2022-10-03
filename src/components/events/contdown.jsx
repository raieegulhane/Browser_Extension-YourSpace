import { useLayoutEffect } from "react";
import { useList } from "../../context";
import { countdownTimer } from "../../utils";

export const Countdown = ({ _id, name, timestamp, currTimestamp }) => {
    const counter = countdownTimer(timestamp, currTimestamp);
    const { countdown, deleteEvent } = counter;
    const { listDispatch } = useList();

    useLayoutEffect(() => {
        deleteEvent && listDispatch({ type: "DELETE_EVENT", payload: _id })
    }, );

    return(
        <div className="fx-c fx-al-c">
            <p className="cl-counter">{countdown}</p>
            <p className="txt-sm">{name}</p>
        </div>
    );
}