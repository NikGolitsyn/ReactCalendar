import React from "react";

const Navigation = ({ dayName, dayDate }) => (
    <div className="calendar__day-label day-label">
      <span className="day-label__day-name">{dayName}</span>
      <span className="day-label__day-number">{dayDate}</span>
    </div>
  );

export default Navigation;

