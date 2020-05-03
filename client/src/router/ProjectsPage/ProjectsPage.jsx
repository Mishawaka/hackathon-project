import React from 'react';

import './ProjectsPage.scss';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h2>Проекты</h2>
      <div className="projects-filter">
        <select name="sort-projects" id="">
          <option selected value="update">
            По дате обновления
          </option>
          <option selected value="create">
            По дате создания
          </option>
        </select>
      </div>
    </div>
  );
};

export default ProjectsPage;
