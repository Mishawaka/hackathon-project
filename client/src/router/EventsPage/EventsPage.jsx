import React, { useContext, useEffect } from 'react';
import Filter from '../../components/EventsPage/Filter/Filter';
import Items from '../../components/EventsPage/Items/Items';
import Add from '../../components/EventsPage/Add/Add';
import { EventContext } from '../../contexts/EventsContext';
import { Context } from '../../contexts/Context';

import './EventsPage.scss';

const EventsPage = () => {
  const { events, setEvents, date } = useContext(EventContext);
  const { auth } = useContext(Context);

  const checks = events.map((el) => el.project.theme);

  const cities = [
    { name: 'Одесса', value: 'odesa' },
    { name: 'Киев', value: 'kyiv' },
    { name: 'Львов', value: 'lviv' },
    { name: 'Харьков', value: 'kharkiv' },
    { name: 'Днепр', value: 'dnepr' },
  ];

  const themes = [
    'помощь пожилым людям',
    'помощь сиротам',
    'помощь многодетным семьям',
    'помощь животным',
    'эко инициативы',
    'студенческие инициативы',
    'облагораживание города',
    'волонтерим и путешествуем',
  ];

  useEffect(() => {
    if (events.length === 0) {
      fetch('http://localhost:8000/get-all-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
      })
        .then((res) => {
          if (res.status === 401) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('img');
            localStorage.removeItem('email');
            window.location.replace('/');
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setEvents(data);
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  return (
    <div className="events-page animated fadeIn">
      <h2>Мероприятия</h2>
      <Add />
      <div className="events-content">
        <Filter checks={checks} cities={cities} themes={themes} />
        <Items events={events} date={date} />
      </div>
    </div>
  );
};

export default EventsPage;
