import { useLayoutEffect, useState } from "react";
import { useList } from "../../context";
import { Countdown } from "./contdown";

export const CountdownList = () => {
    const { listState: { eventsList } } = useList();
    const [currTimestamp, setCurrTimestamp] = useState(new Date());

    useLayoutEffect(() => {
        setInterval(() => {
            setCurrTimestamp(new Date())
        }, 1000);
    }, []);

    return(
        <ul className="fx-r fx-1 fx-al-c list-noBullets gap-3">
        {
            eventsList.map(({ _id, name, timestamp }) => {
                return(
                    <li 
                        className="cl-item fx-c fx-js-c fx-al-c"
                        key={_id}
                    >
                        <Countdown 
                            _id={_id}
                            name={name}
                            timestamp={timestamp}
                            currTimestamp={currTimestamp}
                        />
                    </li>
                );
            })
        }
        </ul>
    );
}