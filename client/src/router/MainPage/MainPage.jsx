import React, { useContext, useEffect } from 'react';
import FirstBlock from '../../components/MainPage/FirstBlock/FirstBlock';
import SecondBlock from '../../components/MainPage/SecondBlock/SecondBlock';
import ThirdBlock from '../../components/MainPage/ThirdBlock/ThirdBlock';
import ForthBlock from '../../components/MainPage/ForthBlock/ForthBlock';
import SecondBanner from '../../components/MainPage/SecondBanner/SecondBanner';
import FIfthBlock from '../../components/MainPage/FIfthBlock/FIfthBlock';

import './MainPage.scss';
import { Context } from '../../contexts/Context';
import BannerBlock from '../../components/AuthMainPage/BannerBlock/BannerBlock';
import EventBlock from '../../components/AuthMainPage/EventBlock/EventBlock';
import ProjectBlock from '../../components/AuthMainPage/ProjectBlock/ProjectBlock';
import RegProjectBlock from '../../components/AuthMainPage/RegProjectBlock/RegProjectBlock';
import SixthBlock from '../../components/MainPage/SixthBlock/SixthBlock';

const MainPage = () => {
  const { setRegisterModal, setAuth, auth } = useContext(Context);

  useEffect(() => {
    console.log('useEffect');
    fetch('http://localhost:8000/checkToken', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ token: localStorage.getItem('jwt') }),
    })
      .then((res) => (res.status === 200 ? setAuth(true) : setAuth(false)))
      .catch((err) => console.log(err));
  }, [auth]);


  return (
    <div className="main-page">
      <div className="no-auth-main" style={{ display: auth ? 'none' : 'block' }}>
        <FirstBlock setRegisterModal={setRegisterModal} />
        <SecondBlock />
        <ThirdBlock />
        <ForthBlock />
        <SecondBanner />
        <FIfthBlock />
        <SixthBlock />
      </div>
      <div className="auth-main" style={{ display: auth ? 'block' : 'none' }}>
        <BannerBlock />
        <EventBlock />
        <ProjectBlock />
        <RegProjectBlock />
      </div>
    </div>
  );
};

export default MainPage;
