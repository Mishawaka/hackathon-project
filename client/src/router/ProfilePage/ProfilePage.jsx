import React, { useEffect, useState, useContext } from 'react';
import ProfileLeftBlock from '../../components/ProfilePage/ProfileLeftBlock/ProfileLeftBlock';
import ProfileCenterBlock from '../../components/ProfilePage/ProfileCenterBlock/ProfileCenterBlock';
import ProfileRightBlock from '../../components/ProfilePage/ProfileRightBlock/ProfileRightBlock';
import { Context } from '../../contexts/Context';

import './ProfilePage.scss';

const ProfilePage = () => {
  const [user, setUser] = useState();
  const { auth } = useContext(Context);

  useEffect(() => {
    fetch('http://localhost:8000/get-user-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorage.getItem('jwt') }),
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('jwt');
          localStorage.removeItem('img');
          localStorage.removeItem('email');
          window.location.replace('/');
        } else {
          return res.json();
        }
      })
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [auth]);

  return (
    <div className="profile-page animated fadeIn slower">
      <h2>Профиль</h2>
      <div className="profile-container">
        <ProfileLeftBlock user={user} />
        <ProfileCenterBlock user={user} />
        <ProfileRightBlock user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
