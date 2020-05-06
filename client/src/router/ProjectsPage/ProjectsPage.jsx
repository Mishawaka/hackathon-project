import React from 'react';
import Sort from '../../components/ProjectsPage/Sort/Sort';
import Filter from '../../components/ProjectsPage/Filter/Filter';
import Items from '../../components/ProjectsPage/Items/Items';

import './ProjectsPage.scss';

const ProjectsPage = () => {
  const toggleArrow = ({ target }) => {
    let { classList } = target;
    classList.toggle('sort-active');
  };

  const checks = [
    { name: 'помощь пожилым людям', value: 'help-old' },
    { name: 'помощь сиротам', value: 'help-orphan' },
    { name: 'помощь многодетным семьям', value: 'help-family' },
    { name: 'помощь животным', value: 'help-animals' },
    { name: 'эко инициативы', value: 'eco' },
    { name: 'студенческие инициативы', value: 'students' },
    { name: 'облагораживание города', value: 'help-city' },
    { name: 'волонтерим и путешествуем', value: 'help-travel' },
  ];
  const cities = [
    { name: 'Одесса', value: 'odesa' },
    { name: 'Киев', value: 'kyiv' },
    { name: 'Львов', value: 'lviv' },
    { name: 'Харьков', value: 'kharkiv' },
    { name: 'Днепр', value: 'dnepr' },
  ];

  return (
    <div className="projects-page animated fadeIn">
      <h2>Проекты</h2>
      <Sort toggleArrow={toggleArrow} />
      <div className="projects-content">
        <Filter toggleArrow={toggleArrow} checks={checks} cities={cities} />
        <Items />
      </div>
    </div>
  );
};

export default ProjectsPage;
