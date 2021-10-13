import React from 'react';
import './eventmodal.scss';
import '../../common.scss';

const EventModal = ({ deleteEvent, id }) => (
  <button className="delete-event-btn popup__content" onClick={() => deleteEvent(id)}>
    <i className="fas fa-trash-alt"></i> Delete
  </button>
);

export default EventModal;
