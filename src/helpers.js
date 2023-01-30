const formatDate = (timestamp) => {
  const options = { timeStyle: "short", hour12: true };
  
  const formattedTimestamp = new Date(timestamp).toLocaleTimeString(undefined, options);
  const time = formattedTimestamp.slice(0, -2);
  const twelveHour = formattedTimestamp.slice(-2).toUpperCase();
  return {
    time,
    twelveHour
  }
}

export { formatDate };