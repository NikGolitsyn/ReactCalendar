import React, { useState } from "react";

import "./event.scss";
import "../../common.scss";

const Event = ({ height, marginTop, title, time, id }) => {
  const [deleteButton, setDeleteButton] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const ToggleButton = () => {
    setDeleteButton(true);
  };

  return (
    <div
      style={eventStyle}
      className="event"
      data-id={id}
      onClick={ToggleButton}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {deleteButton && (
        <button className="delete-event-btn button">Delete</button>
      )}
    </div>
  );
};

export default Event;
