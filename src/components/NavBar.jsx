import React from "react";

//styles
import "../css/navbar.css";
import NavLink from "./NavLink";

const NavBar = (props) => {
  return (
    <span className="navbar">
      <div className="nav-header">Activity</div>
      <ul className="nav-link-list">
        <NavLink onClick={props.onClick} name="Inbox" selected={props.selected === "inbox"}/>
        <NavLink onClick={props.onClick} name="Archived" selected={props.selected === "archived"}/>
        <NavLink onClick={props.onClick} name="All" selected={props.selected === "all"}/>
      </ul>
    </span>
  )
}

export default NavBar;