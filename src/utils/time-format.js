export const getFormattedTime = (currTimestamp, clockFormat12) => {
    const hour24 = currTimestamp.getHours() < 10 ? `0${currTimestamp.getHours()}` : currTimestamp.getHours();
    const hour12 = hour24 >= 12 ? (hour24 - 12 < 10 ? `0${hour24 - 12}` : hour24 - 12) : hour24;
    const minutes = currTimestamp.getMinutes() < 10 ? `0${currTimestamp.getMinutes()}` : currTimestamp.getMinutes();
    const time = `${clockFormat12 ? hour12 : hour24}:${minutes}`;
    const ampm = hour24 < 12 ? "am" : "pm"

    return({time, ampm});
}