import React, { useEffect, useState, useContext } from 'react';
import ProfileLeftBlock from '../../components/ProfilePage/ProfileLeftBlock/ProfileLeftBlock';
import ProfileCenterBlock from '../../components/ProfilePage/ProfileCenterBlock/ProfileCenterBlock';
import ProfileRightBlock from '../../components/ProfilePage/ProfileRightBlock/ProfileRightBlock';
import { Context } from '../../contexts/Context';

import './ProfilePage.scss';
import ProfileTop from '../../components/ProfilePage/ProfileTop/ProfileTop';
import ProfileBottom from '../../components/ProfilePage/ProfileBottom/ProfileBottom';

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
      <ProfileTop />
      <div className="profile-center">
        <ProfileLeftBlock user={user} />
        <ProfileCenterBlock user={user} />
        <ProfileRightBlock user={user} />
      </div>
      <div className="gradient-line" />
      <ProfileBottom />
    </div>
  );
};

export default ProfilePage;
