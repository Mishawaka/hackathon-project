import React, {useState,  useCallback } from 'react';

import './ProfileBottom.scss';

// const ProfileBottom = () => {

//   return (
//     <div className="profile-bottom">
//       <div className="profile-btn-block">
//         <button onClick={() => {document.getElementById('myprojects').style.display = 'block'}}>
//           <h4>Мои проекты</h4>
//         </button>
//         <button onClick={() => {document.getElementById('subscriptions').style.display = 'block'}}>
//           <h4>Подписки</h4>
//         </button>
//         <button onClick={() => {document.getElementById('events').style.display = 'block'}}>
//           <h4>Ивенты</h4>
//         </button>
//       </div>
//       <div className="profile-sliders-block">
//         <div id="myprojects" className="my-projects-block">Мои проекты</div>
//         <div id="subscriptions" className="subscriptions-block">Подписки</div>
//         <div id="events" className="events-block">Ивенты</div>
//       </div>
//     </div>
//   );
// }

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
        {Object.keys(sections).map(sectionName => (
          <button onClick={() => setActiveSection(sectionName)}>
            <h4>{sections[sectionName]['tabName']}</h4>
          </button>
        ))}
      </div>

      <div className="profile-sliders-block">
        <Component />        
      </div>
    </div>
  );
}

export default ProfileBottom;
