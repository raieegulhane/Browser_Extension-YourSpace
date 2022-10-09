    export const greetings = (currTimestamp) => {
    const hour = currTimestamp.getHours();

    if (hour >= 0 && hour < 3) {
        return("evening");
    }
    if (hour >= 3 && hour < 12) { 
        return("morning");
    }
    if (hour === 12) { 
        return("noon");
    }
    if (hour > 12 && hour <= 16) {
        return("afternoon");
    }
    if (hour > 17) {
        return("evening");
    }
}