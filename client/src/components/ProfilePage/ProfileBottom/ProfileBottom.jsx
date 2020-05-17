import React from 'react';

import './ProfileBottom.scss';

const ProfileBottom = () => {
  return (
    <div className="profile-bottom">
      <div className="profile-btn-block">
        <button>
          <h4>Мои проекты</h4>
        </button>
        <button>
          <h4>Подписки</h4>
        </button>
        <button>
          <h4>Ивенты</h4>
        </button>
      </div>
      <div className="profile-sliders-block"></div>
    </div>
  );
}

export default ProfileBottom;