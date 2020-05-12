import React from 'react';
import Carousel from './Carousel';

import './Description.scss';

const Description = ({ project }) => {
  return (
    <div className="project-description">
      <div className="flex">
        <div className="text">
          <h1>Об организации</h1>
          <p>{project.descr}</p>
        </div>
        <div className="volunteer-invite">
          <button>
            <h4>стать волонтером</h4>
          </button>
        </div>
      </div>
      <Carousel images={project.images} />
    </div>
  );
};

export default Description;
