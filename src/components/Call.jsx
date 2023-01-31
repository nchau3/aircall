import React from "react";

//components
import DateDivider from "./DateDivider";

//styles
import "../css/call.css";

//helpers
import { callTypeString, formatCallDuration, formatDay, formatTime } from "../helpers";
import classNames from "classnames";
import FadeIn from "react-fade-in/lib/FadeIn";

const Call = (props) => {
  //formatting call data, selecting icons
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
      <li className="call-container" onClick={() => props.onClick(props.id)}>
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
        {props.selected === props.id &&
        <FadeIn wrapperTag="span" className="call-details">
            <div>{formatCallDuration(props.duration)}</div>
            <div className="button-container" onClick={e => {
                e.stopPropagation();
                props.onSubmit(props.id, props.is_archived);
              }
            }>
              <i className="fa-solid fa-box-archive archive-button"></i>
              <div className="button-label">Archive</div>
            </div>
        </FadeIn>
        }
      </li>
    </div>
  )
}

export default Call;