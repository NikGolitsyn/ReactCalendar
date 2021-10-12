import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Day from "../day/Day.jsx";

import "./week.scss";

const Week = ({ weekDates, events, deleteEvent }) => (
  <div className="calendar__week">
    {weekDates.map((dayStart) => {
      const dayEnd = new Date(dayStart.getTime()).setHours(
        new Date(dayStart).getHours() + 24
      );

      // getting all events from the day we will render
      const dayEvents = events.filter(
        (event) =>
          new Date(event.dateFrom) > new Date(dayStart) &&
          new Date(event.dateTo) < dayEnd
      );

      if (moment(dayStart).format("LL") === moment(new Date()).format("LL")) {
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            deleteEvent={deleteEvent}
            currentDay={true}
          />
        );
      }

      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.getDate()}
          dayEvents={dayEvents}
          deleteEvent={deleteEvent}
        />
      );
    })}
  </div>
);

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};
