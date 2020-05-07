import React, { useContext, useEffect, useState } from 'react';
import Sort from '../../components/ProjectsPage/Sort/Sort';
import Filter from '../../components/ProjectsPage/Filter/Filter';
import Items from '../../components/ProjectsPage/Items/Items';
import { ProjectContext } from '../../contexts/ProjectsContext';
import { Context } from '../../contexts/Context';

import './ProjectsPage.scss';

const ProjectsPage = () => {
  const toggleArrow = ({ target }) => {
    let { classList } = target;
    classList.toggle('sort-active');
  };

  const { projects, setProjects } = useContext(ProjectContext);
  const { auth } = useContext(Context);
  const [changeFind, setChangeFind] = useState('');

  const checks = projects.map((el) => el.theme);

  const cities = [
    { name: 'Одесса', value: 'odesa' },
    { name: 'Киев', value: 'kyiv' },
    { name: 'Львов', value: 'lviv' },
    { name: 'Харьков', value: 'kharkiv' },
    { name: 'Днепр', value: 'dnepr' },
  ];

  useEffect(() => {
    if (projects.length === 0) {
      fetch('http://localhost:8000/get-all-projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
      })
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.log(err));
    }
  }, [auth]);

  return (
    <div className="projects-page animated fadeIn">
      <h2>Проекты</h2>
      <Sort toggleArrow={toggleArrow} />
      <div className="projects-content">
        <Filter
          changeFind={changeFind}
          setChangeFind={setChangeFind}
          toggleArrow={toggleArrow}
          checks={checks}
          cities={cities}
        />
        <Items changeFind={changeFind} projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
