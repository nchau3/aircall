import React from "react";

import "../css/navbar.css";

const NavBar = () => {
  return (
    <span className="navbar">
      <div className="nav-header">Activity</div>
      <ul className="nav-link-list">
        <li className="nav-link">Inbox</li>
        <li className="nav-link">Archived</li>
        <li className="nav-link">All Calls</li>
      </ul>
    </span>
  )
}

export default NavBar;