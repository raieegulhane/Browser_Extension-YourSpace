export const getFormattedDate = (currTimestamp) => {
    const month = currTimestamp.toLocaleString('default', { month: 'long' });
    const day = currTimestamp.getDate();
    const year = currTimestamp.getFullYear();
    const currDateString = `${month} ${day}, ${year}`;

    return(currDateString);
}