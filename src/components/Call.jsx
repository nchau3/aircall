import React from "react";
import { callTypeString, formatDay, formatTime } from "../helpers";
import classNames from "classnames";

import "../css/call.css";
import DateDivider from "./DateDivider";

const Call = (props) => {
  const callTime = formatTime(props.created_at);

  const callTypeClassNames = classNames("fa-solid", {
    "fa-phone": props.call_type !== "voicemail",
    "fa-voicemail": props.call_type === "voicemail"
  });

  const callDirectionClassName = classNames("fa-solid", "call-direction", {
    "fa-arrow-right": props.direction === "outbound" && props.call_type !== "voicemail",
    "fa-arrow-left": props.direction === "inbound" && props.call_type !== "voicemail"
  });

  return (
    <div className="activity-feed-item">
      {props.firstOfDay && <DateDivider date={formatDay(props.created_at)}/>}
      <li className="call-container">
        <span className="call-overview">
          <div className="call-overview-left">
            <div className="call-type">
              <i className={callTypeClassNames}></i>
              <i className={callDirectionClassName}></i>
            </div>
            <div>
              <div className="call-from">{props.from}</div>
              <div>{callTypeString(props.call_type, props.direction)} {props.via ? props.via : "private number"}</div>
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