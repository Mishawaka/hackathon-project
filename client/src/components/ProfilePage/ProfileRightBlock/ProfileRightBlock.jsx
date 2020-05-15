import React from 'react';

import './ProfileRightBlock.scss';

const ProfileRightBlock = () => (
  <div className="profile-block-right">
      <h3>Безопасность</h3>
      <form action="POST">
        <input type="password" placeholder="Старый пароль" required/>
        <input type="password" placeholder="Новый пароль" required/>
        <button className="gradient-btn save-btn">
          <h4>Сохранить</h4>
        </button>
      </form>
  </div>
);

export default ProfileRightBlock;