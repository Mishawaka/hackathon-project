import React, { useContext, useEffect, useState } from 'react';
import Sort from '../../components/EventsPage/Sort/Sort';
import Filter from '../../components/EventsPage/Filter/Filter';
import Items from '../../components/EventsPage/Items/Items';
import { EventContext } from '../../contexts/EventsContext';
import { Context } from '../../contexts/Context';

import './EventsPage.scss';

const EventsPage = () => {
  const toggleArrow = ({ target }) => {
    let { classList } = target;
    classList.toggle('sort-active');
  };

  const { events, setEvents } = useContext(EventContext);
  const { auth } = useContext(Context);
  const [changeFind, setChangeFind] = useState('');

  const checks = events.map((el) => el.theme);

  const cities = [
    { name: 'Одесса', value: 'odesa' },
    { name: 'Киев', value: 'kyiv' },
    { name: 'Львов', value: 'lviv' },
    { name: 'Харьков', value: 'kharkiv' },
    { name: 'Днепр', value: 'dnepr' },
  ];

  useEffect(() => {
    if (events.length === 0) {
      fetch('http://localhost:8000/get-all-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
      })
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((err) => console.log(err));
    }
  }, [auth]);

  return (
    <div className="events-page animated fadeIn">
      <h2>Мероприятия</h2>
      <Sort toggleArrow={toggleArrow} />
      <div className="events-content">
        <Filter
          changeFind={changeFind}
          setChangeFind={setChangeFind}
          toggleArrow={toggleArrow}
          checks={checks}
          cities={cities}
        />
        <Items changeFind={changeFind} events={events} />
      </div>
    </div>
  );
};

export default EventsPage;
