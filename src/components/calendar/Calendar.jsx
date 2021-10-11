import React, { useState } from "react";

import Navigation from "../navigation/Navigation.jsx";
import Week from "../week/Week.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import eventsArray from "../../gateway/events";
import Modal from "../modal/Modal.jsx";

import { days, hours } from "../../utils/dateUtils.js";

import "./calendar.scss";

const Calendar = ({ weekDates, modalState, onToggle }) => {
  const [events, setEvents] = useState(eventsArray);

  const createEvent = (e, userData) => {
    e.preventDefault();
    const { title, date, startTime, endTime, description } = userData;

    const newEvent = {
      id: events.length + 1,
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };

    setEvents([...events.concat(newEvent)]);
  };

  return (
    <>
      {modalState && <Modal onToggle={onToggle} onEventCreate={createEvent} />}
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
            <Week weekDates={weekDates} events={events} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;
