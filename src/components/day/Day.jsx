import React from "react";
import Hour from "../hour/Hour.jsx";

import { hours } from "../../utils/dateUtils.js";

import "./day.scss";

const Day = ({ dataDay, dayEvents }) => (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );

export default Day;
