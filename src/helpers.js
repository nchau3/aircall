const formatTime = (timestamp) => {
  const options = { timeStyle: "short", hour12: true };
  
  const formattedTimestamp = new Date(timestamp).toLocaleTimeString(undefined, options);
  const time = formattedTimestamp.slice(0, -2);
  const twelveHour = formattedTimestamp.slice(-2).toUpperCase();
  return {
    time,
    twelveHour
  }
};

const formatDay = (timestamp) => {
  const month = new Date(timestamp).toLocaleDateString(undefined, {month: "long"});
  const day = new Date(timestamp).toLocaleDateString(undefined, {day: "2-digit"});
  const year = new Date(timestamp).toLocaleDateString(undefined, {year: "numeric"});

  return (`${month}, ${day} ${year}`).toUpperCase();
};

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
};

const callTypeString = (call_type, direction) => {
  if (direction === "inbound") {
    switch (call_type) {
      case "missed":
        return "missed call from";
      case "answered":
        return "call from";
      case "voicemail":
        return "voicemail from";
    }
  } else if (direction === "outbound") {
    switch (call_type) {
      case "missed":
        return "tried to call";
      case "answered":
        return "called";
      case "voicemail":
        return "left voicemail for";
    }
  }
};

const formatCallDuration = (duration) => {
  if (duration < 60) {
    return `${duration} seconds`
  } else if (duration >= 60 && duration < 120) {
    return `${duration} minute`
  } else if (duration >= 120 && duration < 3600) {
    return `${Math.round(duration / 60)} minutes`
  } else if (duration === 3600 && duration < 3660) {
    return "1 hour"
  } else if (duration > 3660 && duration < 86400) {
    return `${Math.round(duration / 3600)}h ${Math.round((duration % 3600) / 60)}m`
  } else if (duration > 86400) {
    return `${Math.round(duration / 86400)}d ${Math.round((duration % 86400) / 3600)}h`
  }
};

export { formatTime, formatDay, checkDay, callTypeString, formatCallDuration };