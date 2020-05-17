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
  [MY_PROJECTS]: MyProjects,
  [SUBSCRIPTIONS]: Subscriptions,
  [EVENTS]: Events
};

const DEFAULT_SECTION = SUBSCRIPTIONS;

const ProfileBottom = () => {
  const [activeSection, setActiveSection] = useState(DEFAULT_SECTION);

  const Component = sections[activeSection];

  return (
    <div className="profile-bottom">
      <div className="profile-btn-block">
        <button onClick={useCallback(() => setActiveSection(MY_PROJECTS), [])}>
          <h4>Мои проекты</h4>
        </button>
        <button onClick={useCallback(() => setActiveSection(SUBSCRIPTIONS), [])}>
          <h4>Подписки</h4>
        </button>
        <button onClick={useCallback(() => setActiveSection(EVENTS), [])}>
          <h4>Ивенты</h4>
        </button>
      </div>

      <div className="profile-sliders-block">
        <Component />        
      </div>
    </div>
  );
}

export default ProfileBottom;
