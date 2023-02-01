import React from "react";
import classNames from "classnames";

const SubmitButton = (props) => {
  const buttonClasses = classNames("fa-solid", "submit-button", {
    "fa-box-archive": (props.destination).toLowerCase() === "archive",
    "fa-inbox": (props.destination).toLowerCase() === "inbox"
  })

  return (
    <div className="button-container" onClick={e => {
      e.stopPropagation();
      props.onSubmit(props.id, props.status);
    }}>
      <i className={buttonClasses}></i>
      <div className="button-label">{props.destination}</div>
    </div>
  )
}

export default SubmitButton;