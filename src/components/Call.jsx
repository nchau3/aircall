import React from "react";

import "../css/call.css";

const Call = (props) => {
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
          <div>⋮ 07:58</div>
          <div className="twelve-hour">PM</div>
        </div>
      </span>
    </li>
  )
}

export default Call;