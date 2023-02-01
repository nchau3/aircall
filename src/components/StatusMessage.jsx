import classNames from "classnames";
import React from "react";

import "../css/status-message.css"

const StatusMessage = (props) => {
  const statusClassNames = classNames("status-message", {
    "success": props.success,
    "error": props.error
  })

  return (
    <div className={statusClassNames}>{props.message}</div>
  )
}

export default StatusMessage;