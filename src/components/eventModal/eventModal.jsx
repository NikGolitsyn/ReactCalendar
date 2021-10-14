import React from 'react';
import './eventmodal.scss';
import '../../common.scss';

const EventModal = ({ deleteEvent, id, dateFrom }) => (
  <button className="delete-event-btn popup__content" onClick={() => deleteEvent(id, dateFrom)}>
    <i className="fas fa-trash-alt"></i> Delete
  </button>
);

export default EventModal;
