import React, { useContext, useEffect, useState } from 'react';
import Filter from '../../components/EventsPage/Filter/Filter';
import Items from '../../components/EventsPage/Items/Items';
import Add from '../../components/EventsPage/Add/Add';
import { EventContext } from '../../contexts/EventsContext';
import { Context } from '../../contexts/Context';

import './EventsPage.scss';
import { ProjectContext } from '../../contexts/ProjectsContext';

const EventsPage = () => {
  const { events, setEvents } = useContext(EventContext);
  const { auth, cities, themes } = useContext(Context);
  const { projects, setProjects } = useContext(ProjectContext);

  const checks = events.map((el) => el.project.theme);
  const [changeCity, setChangeCity] = useState('');
  const [date, setDate] = useState('');
  const [filterChecks, setFilterChecks] = useState([]);

  useEffect(() => {
    if (events.length === 0) {
      fetch(`https://${process.env.REACT_APP_ROOT}/get-all-events`, {
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
          let arr = data.map((el) => ({
            ...el,
            date: new Date(el.date),
          }));
          setEvents(arr);
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  useEffect(() => {
    if (projects.length === 0) {
      fetch(`https://${process.env.REACT_APP_ROOT}/get-all-projects`, {
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
          setProjects(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="events-page animated fadeIn">
      <h2>Мероприятия</h2>
      <Add />
      <div className="events-content">
        <Filter
          setChangeCity={setChangeCity}
          checks={checks}
          cities={cities}
          themes={themes}
          date={date}
          setDate={setDate}
          filterChecks={filterChecks}
          setFilterChecks={setFilterChecks}
        />
        <Items
          changeCity={changeCity}
          filterChecks={filterChecks}
          events={events}
          date={date}
        />
      </div>
    </div>
  );
};

export default EventsPage;
