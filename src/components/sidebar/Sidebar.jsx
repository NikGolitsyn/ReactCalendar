import React from "react";

import "./sidebar.scss";

const Sidebar = ({ timeHour }) => (
  <div className="time-slot">
    <span className="time-slot__time">{`${timeHour}:00`}</span>
  </div>
);

export default Sidebar;

