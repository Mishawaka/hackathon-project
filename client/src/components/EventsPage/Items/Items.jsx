import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrRight from '../../../img/arrow-right.svg';
import { EventContext } from '../../../contexts/EventsContext';

import './Items.scss';

const Items = ({ events, date }) => {
  const { filterChecks } = useContext(EventContext);
  const [event, setEvent] = useState(events);

  useEffect(() => {
    setEvent(events);
    if (filterChecks.length === 0) {
      const evs = events.map((el) => ({
        ...el,
        date: new Date(el.date),
      }));
      setEvent(evs);
    } else {
      let arr = events.filter((el) =>
        filterChecks.includes(el.project.theme.toLowerCase())
      );
      const evs = arr.map((el) => ({
        ...el,
        date: new Date(el.date),
      }));
      setEvent(evs);
    }
  }, [events, filterChecks]);

  useEffect(() => {
    const evs = events.map((el) => ({
      ...el,
      date: new Date(el.date),
    }));
    if (date !== '') {
      const arr = evs.filter((el) => {
        console.log(el.date.toLocaleDateString());
        console.log(date.toLocaleDateString());
        return el.date.toLocaleDateString() === date.toLocaleDateString();
      });
      setEvent(arr);
    }
  }, [date, filterChecks]);

  return (
    <div
      style={{ display: events.length === 0 ? 'none' : 'grid' }}
      className="events-items"
    >
      {event.map((el, id) => (
        <div key={id} className="event-item">
          <div className="item-flex">
            <div>
              <p>{el.city}</p>
              <p>{el.addr}</p>
            </div>
            <div>
              <p>{el.date.toLocaleDateString('en-GB')}</p>
              <p>{el.date.toLocaleTimeString('en-GB').substring(0, 5)}</p>
            </div>
          </div>
          <img
            src={`http://localhost:8000/image/${el.imageUrl}`}
            alt="rocket"
          />
          <h4>{el.name}</h4>
          <div>
            <p>Тема: {el.project.theme}</p>
            <Link to={'/event/' + el.name}>
              <img src={arrRight} alt="arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
