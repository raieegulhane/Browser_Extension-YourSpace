export const inpTimestampFormat = (currTimestamp) => {
    const year = currTimestamp.getFullYear();
    const month = currTimestamp.getMonth() + 1;
    const editedMonth = month < 10 ? `0${month}` : month;
    const date = currTimestamp.getDate();
    const editedDate = date < 10 ? `0${date}` : date;
    const hour = currTimestamp.getHours();
    const editedHour = date < 10 ? `0${hour}` : hour;
    const minutes = currTimestamp.getMinutes();
    const editedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const timestamp=`${year}-${editedMonth}-${editedDate}T${editedHour}:${editedMinutes}`;

    return timestamp;
}