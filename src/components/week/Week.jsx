import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from '../day/Day.jsx';
import Modal from '../modal/Modal.jsx';
import { formatMins } from '../../utils/dateUtils.js';
import './week.scss';

const Week = ({ weekDates, events, deleteEvent, onToggle, modalState, onEventCreate }) => {
  const [timeSlotDate, setTimeSlotDate] = useState(null);

  const timeSlotHandler = event => {
    if (!event.target.classList.contains('calendar__time-slot')) {
      return;
    }

    setTimeSlotDate({
      timeHourStart: `${formatMins(Number(event.target.dataset.time))}:00`,
      timeHourEnd: `${formatMins(Number(event.target.dataset.time) + 1)}:00`,
      timeDay: event.target.parentElement.dataset.day,
      timeMonth: document.querySelector('.navigation__displayed-month').textContent,
    });

    onToggle();
  };

  useEffect(() => {
    setTimeSlotDate(null);
  }, [timeSlotDate]);

  return (
    <>
      {modalState && (
        <Modal onToggle={onToggle} onEventCreate={onEventCreate} timeSlotDate={timeSlotDate} />
      )}
      <div className="calendar__week" onClick={event => timeSlotHandler(event)}>
        {weekDates.map(dayStart => {
          const dayEnd = new Date(dayStart.getTime()).setHours(new Date(dayStart).getHours() + 24);

          // getting all events from the day we will render
          const dayEvents = events.filter(
            event =>
              new Date(event.dateFrom) > new Date(dayStart) && new Date(event.dateTo) < dayEnd,
          );

          if (moment(dayStart).format('LL') === moment(new Date()).format('LL')) {
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
    </>
  );
};

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};
