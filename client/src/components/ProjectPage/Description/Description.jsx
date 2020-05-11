import React from 'react';
import cloud from '../../../img/cloud.svg';

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
            <h4>Подпишись</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
