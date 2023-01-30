import React from "react";

import "../css/call.css";

const Call = () => {
  return (
    <li className="call-container">
      <span className="call-overview">
        <div className="call-overview-left">
          <div className="call-type">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div>
            <div>123 v333 4123</div>
            <div>missed call from</div>
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