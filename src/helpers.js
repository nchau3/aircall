const formatTime = (timestamp) => {
  const options = { timeStyle: "short", hour12: true };
  
  const formattedTimestamp = new Date(timestamp).toLocaleTimeString(undefined, options);
  const time = formattedTimestamp.slice(0, -2);
  const twelveHour = formattedTimestamp.slice(-2).toUpperCase();
  return {
    time,
    twelveHour
  }
}

const formatDay = (timestamp) => {
  const month = new Date(timestamp).toLocaleDateString(undefined, {month: "long"});
  const day = new Date(timestamp).toLocaleDateString(undefined, {day: "2-digit"});
  const year = new Date(timestamp).toLocaleDateString(undefined, {year: "numeric"});

  return (`${month}, ${day} ${year}`).toUpperCase();
}

const checkDay = (calls) => {
  const dateStack = [];

  return calls.map(call => {
    const formattedDay = formatDay(call.created_at);
    if (!dateStack.includes(formattedDay)) {
      dateStack.push(formattedDay);
      call.firstOfDay = true;
      return call;
    }
    else {
      call.firstOfDay = false;
      return call;
    }
  })
}

export { formatTime, formatDay, checkDay };