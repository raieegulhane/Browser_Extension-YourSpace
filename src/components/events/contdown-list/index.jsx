import "./countdown-list.css";
import { useList } from "../../../context";
import { useState, useLayoutEffect } from "react";
import { Countdown } from "./countdown";

export const CountdownList = () => {
    const { listState: { eventsList }} = useList();
    const [currTime, setCurrTime] = useState("");

    useLayoutEffect(() => {
        setInterval(() => {
			setCurrTime(new Date());
		}, 1000);
    }, [setCurrTime]);

    return(
        <div className="cl-wr fx-r gap-3">
        {
            eventsList.map((eventItem) => {
                return(
                    <Countdown 
                        key={eventItem._id}
                        eventItem={eventItem}
                        currTime={currTime}
                    />
                );
            })
        }
        </div>    
    );
}