import React from 'react';

import './ProfileLeftBlock.scss';

const ProfileLeftBlock = () => (
  <div className="profile-block-left">
    <img src={`http://localhost:8000/image/${localStorage.getItem('img')}`} alt=""/>
  </div>
);

export default ProfileLeftBlock;