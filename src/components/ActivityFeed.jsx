import React from "react";

//components
import Call from "./Call";

//styles
import "../css/activity-feed.css";

//helpers
import { checkDay } from "../helpers";

const ActivityFeed = (props) => {
  
  const callList = checkDay(props.calls).map(call => {
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
      created_at={call.created_at}
      firstOfDay={call.firstOfDay}
      />
    )
  });

  return (
    <ul>
      {callList}
    </ul>
  )
}

export default ActivityFeed;