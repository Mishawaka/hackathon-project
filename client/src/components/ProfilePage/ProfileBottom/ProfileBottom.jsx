import React, { useState } from 'react';

import './ProfileBottom.scss';

const MyProjects = () => (
  <div className="my-projects-block">Мои проекты</div>
);

const Subscriptions = () => (
  <div className="subscriptions-block">Подписки</div>
);

const Events = () => (
  <div className="events-block">Ивенты</div>
);

const MY_PROJECTS =  'my_projects';
const SUBSCRIPTIONS = 'subscriptions';
const EVENTS = 'events';

const sections = {
  [MY_PROJECTS]: {
    tabName: 'Мои проекты',
    component: MyProjects,
  },
  [SUBSCRIPTIONS]: {
    tabName: 'Подписки',
    component: Subscriptions,
  },
  [EVENTS]: {
    tabName: 'Ивенты',
    component: Events,
  },
};

const ProfileBottom = () => {
  const [activeSection, setActiveSection] = useState(SUBSCRIPTIONS);

  const Component = sections[activeSection]['component'];

  return (
    <div className="profile-bottom">
      <div className="profile-btn-block">
        {Object.keys(sections).map(sectionName => {
          const className = sectionName === activeSection ? 'active' : '';
          
          return (
            <button className={className} onClick={() => setActiveSection(sectionName)}>
              {sections[sectionName]['tabName']}
            </button>
          );
        })}
      </div>

      <div className="profile-sliders-block">
        <Component />       
      </div>
    </div>
  );
}

export default ProfileBottom;
