import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../contexts/Context';

import Name from '../../components/ProjectPage/Name/Name';
import Description from '../../components/ProjectPage/Description/Description';
import Contacts from '../../components/ProjectPage/Contacts/Contacts';
import Events from '../../components/ProjectPage/Events/Events';

import './ProjectPage.scss';

const ProjectPage = () => {
  const { name } = useParams();
  const [project, setProject] = useState();
  const { auth } = useContext(Context);
  useEffect(() => {
    fetch('http://localhost:8000/get-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorage.getItem('jwt'), name }),
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('jwt');
          window.location.replace('/');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, [auth, name]);

  return (
    <div>
      {project && (
        <div className="project-page animated fadeIn slower">
          <Name project={project} />
          <Description project={project} />
          <Contacts project={project} />
          <Events project={project} />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
