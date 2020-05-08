import React from 'react';

import './Name.scss';

const Name = ({ project }) => {
  return (
    <div className="project-name">
      <h3>Тема: {project.theme}</h3>
      <div className="name">
        <div className="image">
          <img src={`http://localhost:8000/image/${project.imageUrl}`} alt="" />
        </div>
        <h1>{project.name}</h1>
      </div>
      <div className="volunteer">
        <button>
          <h4>стать волонтером</h4>
        </button>
      </div>
    </div>
  );
};

export default Name;
