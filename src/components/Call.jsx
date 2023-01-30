import React from "react";
import { formatDate } from "../helpers";

import "../css/call.css";

const Call = (props) => {
  const callTime = formatDate(props.created_at);

  return (
    <li className="call-container">
      <span className="call-overview">
        <div className="call-overview-left">
          <div className="call-type">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <div>{props.from}</div>
            <div>missed call from {props.via}</div>
          </div>
        </div>
        <div className="call-overview-right">
          <div>⋮ {callTime.time} </div>
          <div className="twelve-hour">{callTime.twelveHour}</div>
        </div>
      </span>
    </li>
  )
}

export default Call;