import React from 'react';

import './Name.scss';

const Name = ({ event }) => {
  return (
    <div className="project-name">
      <h3>Тема: {event.project.theme}</h3>
      <div className="name">
        <div className="image">
          <img src={`http://localhost:8000/image/${event.imageUrl}`} alt="" />
        </div>
        <h1>{event.name}</h1>
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
