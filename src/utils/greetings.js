    export const greetings = (currTimestamp) => {
    const hour = currTimestamp.getHours();
    
    if (hour >= 4 && hour < 12) { 
        return("morning");
    }
    if (hour === 12) { 
        return("noon");
    }
    if (hour > 12 && hour <= 16) {
        return("afternoon");
    }
    if (hour > 16) {
        return("evening")
    }
}