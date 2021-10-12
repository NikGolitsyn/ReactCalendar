import React from "react";
import PropTypes from "prop-types";
import Event from "../event/Event.jsx";
import { formatMins } from "../../utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, deleteEvent }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {/* if no events in the current hour nothing will render here */}
    {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
      const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
        new Date(dateFrom).getMinutes()
      )}`;
      const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
        new Date(dateTo).getMinutes()
      )}`;

      return (
        <Event
          key={id}
          // calculating event height = duration of event in minutes
          height={
            (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
            (1000 * 60)
          }
          marginTop={new Date(dateFrom).getMinutes()}
          time={`${eventStart} - ${eventEnd}`}
          title={title}
          id={id}
          deleteEvent={deleteEvent}
        />
      );
    })}
  </div>
);

export default Hour;

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};