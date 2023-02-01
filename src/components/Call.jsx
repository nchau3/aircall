import React, { useState } from "react";
import axios from "axios";

//components
import DateDivider from "./DateDivider";
import StatusMessage from "./StatusMessage";

//styles
import "../css/call.css";

//helpers
import { callTypeString, formatCallDuration, formatDay, formatTime } from "../helpers";
import classNames from "classnames";
import FadeIn from "react-fade-in/lib/FadeIn";
import SubmitButton from "./SubmitButton";

const Call = (props) => {
  const [status, setStatus] = useState("");

  const callTime = formatTime(props.created_at);

  const callTypeClassNames = classNames("fa-solid", {
    "fa-phone": props.call_type !== "voicemail",
    "fa-voicemail": props.call_type === "voicemail"
  });

  const callDirectionClassName = classNames("fa-solid", "call-direction", {
    "fa-arrow-right": props.direction === "outbound" && props.call_type !== "voicemail",
    "fa-arrow-left": props.direction === "inbound" && props.call_type !== "voicemail"
  });

  const archiveCall = (call_id, status) => {
    const newStatus = status ? false : true;

    setStatus("pending");

    axios.patch(`https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${call_id}`,
     {
      is_archived: newStatus
     })
     .then(response => {
      console.log(response.data);

      if (response.status === 200) {
        setStatus("success");
        setTimeout(() => {
          props.reload();
        }, 1000);
      }
    })
    .catch(error => {
      console.log(error);
      setStatus("error");
      setTimeout(() => {
        setStatus("");
      }, 2000);
    })
  }

  const submitDestination = props.is_archived ? "Inbox" : "Archive";

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
        {(props.selected === props.id && !status) &&
        <FadeIn wrapperTag="span" className="call-details">
            <div>{formatCallDuration(props.duration)}</div>
            <SubmitButton
              onSubmit={archiveCall}
              id={props.id}
              status={props.is_archived}
              destination={submitDestination}
            />
        </FadeIn>
        }
        {status === "pending" && 
          <StatusMessage pending message={"Updating call..."} />
        }
        {status === "success" &&
          <StatusMessage success message={`Call moved to ${submitDestination}!`} />
        }
        {status === "error" &&
          <StatusMessage error message={"Error. Unable to update call."} />
        }
      </li>
    </div>
  )
}

export default Call;