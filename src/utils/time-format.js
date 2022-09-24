export const getFormattedTime = (currTimestamp) => {
    const hour = currTimestamp.getHours() < 10 ? `0${currTimestamp.getHours()}` : currTimestamp.getHours();
    const minutes = currTimestamp.getMinutes() < 10 ? `0${currTimestamp.getMinutes()}` : currTimestamp.getMinutes();
    const currTimeString = `${hour}:${minutes}`;

    return(currTimeString);
}