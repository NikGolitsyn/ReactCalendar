import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './modal.scss';
import { roundMultiple15, formatMins } from '../../utils/dateUtils.js';

const Modal = ({ onToggle, onEventCreate, timeSlotDate }) => {
  const roundedCurrentDate = new Date(
    new Date().setMinutes(roundMultiple15(new Date().getMinutes())),
  );

  let obj = {
    title: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: `${roundedCurrentDate.getHours()}:${formatMins(roundedCurrentDate.getMinutes())}`,
    endTime: `${new Date(
      roundedCurrentDate.setHours(roundedCurrentDate.getHours() + 1),
    ).getHours()}:${formatMins(roundedCurrentDate.getMinutes())}`,
    description: '',
  };

  if (timeSlotDate) {
    const { timeHourStart, timeHourEnd, timeDay} = timeSlotDate;
    obj = {
      title: '',
      date: moment(new Date(timeDay)).format('YYYY-MM-DD'),
      startTime: timeHourStart,
      endTime: timeHourEnd,
      description: '',
    };
  }

  const [eventData, setEventData] = useState(obj);

  const handleChange = e => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onToggle}>
            +
          </button>
          <form className="event-form" onSubmit={e => onEventCreate(e, eventData)}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={eventData.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={eventData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={eventData.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={eventData.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={eventData.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onEventCreate: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
