import React from 'react';
import PropTypes from 'prop-types';
import ModalCreateBtn from './ModalCreateBtn';
import ModalForm from './ModalForm';

const ModalOverlay = ({ modalStateHandler, createEventHandler, changeEventHandler, eventData }) => (
  <div className="modal overlay">
    <div className="modal__content">
      <div className="create-event">
        <ModalCreateBtn modalStateHandler={modalStateHandler} />
        <ModalForm
          createEventHandler={createEventHandler}
          changeEventHandler={changeEventHandler}
          eventData={eventData}
        />
      </div>
    </div>
  </div>
);

export default ModalOverlay;

ModalOverlay.propTypes = {
  createEventHandler: PropTypes.func.isRequired,
  modalStateHandler: PropTypes.func.isRequired,
  changeEventHandler: PropTypes.func.isRequired,
  eventData: PropTypes.object.isRequired
};
