import React, { useContext, useEffect } from 'react';
import EventForm from '../../forms/EventForm/EventForm';
import { Modal } from 'react-responsive-modal';
import { Context } from '../../../contexts/Context';
import { EventContext } from '../../../contexts/EventsContext';

import './Add.scss';

const Add = ({ toggleArrow }) => {
  const { eventModal, setEventModal } = useContext(Context);
  const { events, prForEvent, setPrForEvent } = useContext(EventContext);

  useEffect(() => {
    let arr = events
      .filter((el) => el.project.coord.email === localStorage.getItem('email'))
      .map((el) => ({
        id: el.project._id,
        value: el.project.name,
      }));
    setPrForEvent(arr);
  }, [events]);
  return (
    <div>
      {prForEvent.length > 0 && (
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
      )}
    </div>
  );
};

export default Add;
