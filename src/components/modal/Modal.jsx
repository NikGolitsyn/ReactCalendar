import React, { useState } from "react";

import "./modal.scss";

const Modal = ({ onToggle, onEventCreate }) => {
  const [userData, setUserData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onToggle}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={(e) => onEventCreate(e, userData)}
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={userData.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={userData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={userData.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={userData.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={userData.description}
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
