import React from "react";
import classNames from "classnames";


const NavLink = (props) => {
  const navLinkClassNames = classNames("nav-link", {
    "selected": props.selected
  });

  return (
    <li className={navLinkClassNames} onClick={() => props.onClick((props.name).toLowerCase())}>{props.name}</li>
  )
}

export default NavLink;