import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import Call from "./Call";

//styles
import "../css/activity-feed.css";

const ActivityFeed = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get("https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities")
    .then(response => {
      setCalls(response.data);
    })
  }, []);

  const callList = calls.map(call => {
    return (
      <Call
      key={call.id}
      id={call.id} 
      from={call.from}
      to={call.to}
      direction={call.direction}
      via={call.via}
      duration={call.via}
      call_type={call.call_type}
      />
    )
  })

  return (
    <ul>
      {callList}
    </ul>
  )
}

export default ActivityFeed;