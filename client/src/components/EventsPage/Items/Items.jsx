import React, { useContext, useEffect, useState } from 'react';
import arrRight from '../../../img/arrow-right.svg';
import { EventContext } from '../../../contexts/EventsContext';

import './Items.scss';

const Items = ({ events, changeFind }) => {
  const { filterChecks } = useContext(EventContext);
  const [event, setEvent] = useState(events);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEvent(events);
    if (filterChecks.length === 0) {
        setEvent(events);
    } else {
      let arr = events.filter((el) =>
        filterChecks.includes(el.theme.toLowerCase())
      );
      setEvent(arr);
    }
    setLoading(false);
  }, [events, filterChecks, changeFind]);

  useEffect(() => {
    if (changeFind.length !== 0) {
      const reg = new RegExp(changeFind);
      let arr = event.filter(
        ({ name, theme, descr, org }) =>
          reg.test(name) || reg.test(org) || reg.test(descr)
      );
      setEvent(arr);
    } else {
        setEvent(events);
    }
  }, [changeFind]);

  return (
    <div
      style={{ display: event.length === 0 ? 'none' : 'grid' }}
      className="events-items"
    >
      {event.map((pr, id) => (
        <div key={id} className="event-item">
          <img
            src={`http://localhost:8000/image/${pr.imageUrl}`}
            alt="rocket"
          />
          <h4>{pr.name}</h4>
          <p>{pr.descr}</p>
          <div>
            <p>Тема: {pr.theme}</p>
            <img src={arrRight} alt="arrow-right" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
