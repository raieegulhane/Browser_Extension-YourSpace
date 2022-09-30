export const countdownTimer = (eventTimestamp, currTimestamp) => {
    eventTimestamp = new Date(eventTimestamp);
    currTimestamp = new Date(currTimestamp);
    const totalDiff = eventTimestamp.getTime() - currTimestamp.getTime();
    const daysDiff = Math.floor(totalDiff/(1000*60*60*24));
    const hourDiff = Math.floor(totalDiff/(1000*60*60));
    const minuteDiff = Math.floor(totalDiff/(1000*60));
    const secondDiff = Math.floor(totalDiff/1000)

    if (daysDiff > 4) {
        return({ countdown: `${daysDiff}d`, setReminder: false, deleteEvent: false });
    } else if (daysDiff < 4 && daysDiff > 0) {
        return({
            countdown: `${daysDiff}d ${hourDiff - (daysDiff * 24)}hr`,
            setReminder: false,
            deleteEvent: false
        });
    } else if (hourDiff > 0) {
        return({
            countdown: `${hourDiff}hr ${minuteDiff - (hourDiff * 60)}m`,
            setReminder: false,
            deleteEvent: false
        });
    } else if (minuteDiff >= 3) {
        return({
            countdown: `${minuteDiff}m ${secondDiff - (minuteDiff * 60)}s`,
            setReminder: false,
            deleteEvent: false
        });
    } else if (minuteDiff < 3 && minuteDiff > 0) {
        return({
            countdown: `${minuteDiff}m ${secondDiff - (minuteDiff * 60)}s`,
            setReminder: true,
            deleteEvent: false
        });
    } else if (secondDiff > 0) {
        return({
            countdown: `${secondDiff}s`,
            setReminder: true,
            deleteEvent: false
        });
    } else {
        return({
            countdown: "",
            setReminder: false,
            deleteEvent: true
        })
    }
}