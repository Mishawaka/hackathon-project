import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../contexts/Context';
import { EventContext } from '../../contexts/EventsContext';

import Name from '../../components/ProjectPage/Name/Name';
import Description from '../../components/ProjectPage/Description/Description';
import Contacts from '../../components/ProjectPage/Contacts/Contacts';
import Events from '../../components/ProjectPage/Events/Events';

import './ProjectPage.scss';

const ProjectPage = () => {
  const { name } = useParams();
  const [project, setProject] = useState();
  const { auth } = useContext(Context);
  const { events, setEvents } = useContext(EventContext);
  useEffect(() => {
    fetch('http://localhost:8000/get-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorage.getItem('jwt'), name }),
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
        setProject(data.project);
      })
      .catch((err) => console.log(err));
  }, [auth, name]);

  useEffect(() => {
    if (events.length === 0) {
      fetch('http://localhost:8000/get-all-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('jwt'), name }),
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
  }, [auth, name]);

  return (
    <div>
      {project && (
        <div className="project-page animated fadeIn slower">
          <Name project={project} />
          <Description project={project} />
          <Contacts project={project} />
          <Events events={events} project={project} />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
