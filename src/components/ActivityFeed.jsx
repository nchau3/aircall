import React, { useState } from "react";

//components
import Call from "./Call";

//styles
import "../css/activity-feed.css";

//helpers
import { checkDay } from "../helpers";
import FadeIn from "react-fade-in/lib/FadeIn";

const ActivityFeed = (props) => {
  const [selected, setSelected] = useState();

  const clickHandler = (call_id) => {
    if (selected !== call_id) {
      setSelected(call_id);
    } else {
      setSelected("");
    }
  };
  
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
      selected={selected}
      onClick={clickHandler}
      onSubmit={props.archiveCall}
      />
    )
  });

  return (
    <FadeIn wrapperTag={"ul"} delay={75}>
      {callList}
    </FadeIn>
  )
}

export default ActivityFeed;