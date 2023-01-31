import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

//components
import Call from "./Call";

//styles
import "../css/activity-feed.css";
import { checkDay } from "../helpers";
import NavBar from "./NavBar";

const ActivityFeed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get("https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities")
    .then(response => {
      setCalls((response.data).reverse());
      setIsLoading(false);
    })
  }, []);
    
  const callList = checkDay(calls).map(call => {
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
    isLoading 
    ? 
    <h3>LOADING CALLS...</h3>
    :
    <ul>
      {callList}
    </ul>
  )
}

export default ActivityFeed;