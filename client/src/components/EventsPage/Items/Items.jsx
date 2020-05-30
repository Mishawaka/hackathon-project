import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrRight from '../../../img/arrow-right.svg';

import './Items.scss';

const Items = ({ events, date, changeCity, filterChecks }) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    setEvent(events);
    let evs = [];
    if (date !== '') {
      evs = events.filter((el) => {
        return el.date.toLocaleDateString() == date.toLocaleDateString();
      });
      setEvent(evs);
    } else {
      evs = [...events];
    }
    if (changeCity.length !== 0) {
      let arr = evs.filter((el) => el.city == changeCity);
      setEvent(arr);
    }
    if (filterChecks.length !== 0) {
      console.log(filterChecks);
      let arr = evs.filter((el) =>
        filterChecks.includes(el.project.theme.toLowerCase())
      );

      setEvent(arr);
    }
  }, [events, date, filterChecks, changeCity]);

  return (
    <div className="events-items">
      {event.length > 0 &&
        event.map((el, id) => (
          <div key={id} className="event-item">
            <div className="item-flex">
              <div>
                <p>{el.city}</p>
                <p>{el.addr}</p>
              </div>
              <div>
                <p>{`${el.date.getDate()} ${el.date.toLocaleDateString(
                  'ru-RU',
                  {
                    month: 'long',
                  }
                )}`}</p>
                <p>{el.date.toLocaleTimeString('ru-RU').substring(0, 5)}</p>
              </div>
            </div>
            <img
              src={`https://${process.env.REACT_APP_ROOT}/image/${el.imageUrl}`}
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
