import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navigation from "../navigation/Navigation.jsx";
import Week from "../week/Week.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
// import eventsArray from "../../gateway/events";
import Modal from "../modal/Modal.jsx";
import { getEvent, postEvent, fetchDelete } from "../../gateway/gateway.js";

import { days, hours } from "../../utils/dateUtils.js";

import "./calendar.scss";

const Calendar = ({ weekDates, modalState, onToggle }) => {
  const [events, setEvents] = useState([]);
  const [time, setTime] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getMinutes());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const fetchEvent = () => {
    getEvent()
      .then((eventsList) => setEvents(eventsList))
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const createEvent = (e, userData) => {
    e.preventDefault();
    const { title, date, startTime, endTime, description } = userData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
      id: Math.random(),
    };

    postEvent(newEvent).then(() => fetchEvent());
    onToggle()
  };

  const deleteEvent = (id) => {
    fetchDelete(id).then(() => fetchEvent());
  };
  console.log(events);

  return (
    <>
      {modalState && (
        <Modal on onToggle={onToggle} onEventCreate={createEvent} />
      )}
      <section className="calendar">
        <header className="calendar__header">
          {weekDates.map((dayDate) => (
            <Navigation
              key={dayDate.getTime()}
              dayName={days[dayDate.getDay()]}
              dayDate={dayDate.getDate()}
            />
          ))}
        </header>
        <div className="calendar__body">
          <div className="calendar__week-container">
            <div className="calendar__time-scale">
              {hours.map((hour) => (
                <Sidebar key={hour} timeHour={hour} />
              ))}
            </div>

            <Week
              weekDates={weekDates}
              events={events}
              deleteEvent={deleteEvent}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  modalState: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
