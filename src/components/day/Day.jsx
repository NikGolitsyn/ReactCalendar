import React from "react";
import PropTypes from "prop-types";

import Hour from "../hour/Hour.jsx";

import { hours } from "../../utils/dateUtils.js";

import "./day.scss";

const Day = ({ dataDay, dayEvents, deleteEvent, currentDay }) => {
  const styles = {
    marginTop: new Date().getHours() * 60 + new Date().getMinutes(),
  };

  return (
    <div className="calendar__day" data-day={dataDay}>
      {currentDay && (
        <div className="red-line" style={styles}>
          <div className="ball"></div>
        </div>
      )}
      {hours.map((hour) => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dataDay: PropTypes.string.isRequired,
  dayEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  currentDay: PropTypes.bool,
};
