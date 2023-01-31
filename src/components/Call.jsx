import React from "react";
import { formatDay, formatTime } from "../helpers";

import "../css/call.css";
import DateDivider from "./DateDivider";

const Call = (props) => {
  const callTime = formatTime(props.created_at);

  return (
    <div className="activity-feed-item">
      {props.firstOfDay && <DateDivider date={formatDay(props.created_at)}/>}
      <li className="call-container" onClick={() => clickHandler(props.id)}>
        <span className="call-overview">
          <div className="call-overview-left">
            <div className="call-type">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <div>{props.from}</div>
              <div>missed call from {props.via ? props.via : "unknown"}</div>
            </div>
          </div>
          <div className="call-overview-right">
            <div>⋮ {callTime.time}</div>
            <div className="twelve-hour">{callTime.twelveHour}</div>
          </div>
        </span>
      </li>
    </div>
  )
}

export default Call;