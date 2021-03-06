import React from 'react';
import Carousel from './Carousel';

import './Description.scss';

const Description = ({ project, subscribe, subscribed, setModal }) => {
  const creator = project.coord.email === localStorage.getItem('email');
  return (
    <div className="project-description">
      <div className="flex">
        <div className="text">
          <h1>Об организации</h1>
          <p>{project.descr}</p>
        </div>
        <div className="volunteer-invite">
          <button
            onClick={creator ? () => setModal(true) : subscribe}
            className={subscribed ? 'disabled-gradient' : ''}
          >
            <h4>
              {creator
                ? 'новый ивент'
                : subscribed
                ? 'Вы подписаны'
                : 'Подпишись'}
            </h4>
          </button>
        </div>
      </div>
      <Carousel images={project.images} />
    </div>
  );
};

export default Description;
