import React from 'react';

import './Contacts.scss';

const Contacts = ({ project }) => {
  return (
    <div className="project-contacts">
      <h1>Контакты</h1>
      <div className="contacts-flex">
        <div className="coord">
          <h4>координатор</h4>
          <div>
            <div>
              <img
                src={`http://localhost:8000/image/${project.imageUrl}`}
                alt=""
              />
            </div>
            <h3>{project.org}</h3>
            <p className="email">{project.email}</p>
            <p className="phone">{project.phone}</p>
          </div>
        </div>
        <div className="contacts">
          <h2>
            <span>Д</span>ля связи с нам<span>и</span>
          </h2>
          <p className="inst">{project.inst}</p>
          <p className="facebook">{project.facebook}</p>
          <p className="email">{project.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
