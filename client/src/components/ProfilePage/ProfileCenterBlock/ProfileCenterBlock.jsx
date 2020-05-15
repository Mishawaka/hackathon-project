import React from 'react';

import './ProfileCenterBlock.scss';

const ProfileCenterBlock = () => (
  <div className="profile-block-center">
    <h3>Информация обо мне</h3>
    <h4>Имя: <span>{localStorage.getItem('name')}</span></h4>
    <h4>Фамилия: <span>{localStorage.getItem('name')}</span></h4>
    <h4>Почта: <span>{localStorage.getItem('email')}</span></h4>
    <h4>Номер телефона: <span>+{localStorage.getItem('phone')}</span></h4>
  </div>
)

export default ProfileCenterBlock;