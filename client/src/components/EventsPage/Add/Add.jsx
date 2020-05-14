import React, { useContext } from 'react';
import EventForm from '../../forms/EventForm/EventForm';
import { Modal } from 'react-responsive-modal';
import { Context } from '../../../contexts/Context';

import './Add.scss';

const Add = ({ toggleArrow }) => {
  const { eventModal, setEventModal } = useContext(Context);
  return (
    <div className="event-add">
      <Modal
        classNames={{ modal: 'modal-class' }}
        open={eventModal}
        onClose={() => setEventModal(false)}
        center
      >
        <EventForm modal={eventModal} setModal={setEventModal} />
      </Modal>
      <button onClick={() => setEventModal(true)} className="gradient-btn">
        <h4>добавить ивент</h4>
      </button>
    </div>
  );
};

export default Add;
