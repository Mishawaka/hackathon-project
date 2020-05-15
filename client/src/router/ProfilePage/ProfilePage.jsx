import React from 'react';
import ProfileLeftBlock from '../../components/ProfilePage/ProfileLeftBlock/ProfileLeftBlock';
import ProfileCenterBlock from '../../components/ProfilePage/ProfileCenterBlock/ProfileCenterBlock';
import ProfileRightBlock from '../../components/ProfilePage/ProfileRightBlock/ProfileRightBlock';

import './ProfilePage.scss';

const ProfilePage = () => (
  <div className="profile-page animated fadeIn slower">
    <h2>Профиль</h2>
    <div className="profile-container">
      <ProfileLeftBlock />
      <ProfileCenterBlock />
      <ProfileRightBlock />
    </div>
  </div>
)

export default ProfilePage;