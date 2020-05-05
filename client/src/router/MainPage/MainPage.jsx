import React, { useContext } from 'react';
import FirstBlock from '../../components/MainPage/FirstBlock/FirstBlock';
import SecondBlock from '../../components/MainPage/SecondBlock/SecondBlock';
import ThirdBlock from '../../components/MainPage/ThirdBlock/ThirdBlock';
import ForthBlock from '../../components/MainPage/ForthBlock/ForthBlock';
import SecondBanner from '../../components/MainPage/SecondBanner/SecondBanner';
import FIfthBlock from '../../components/MainPage/FIfthBlock/FIfthBlock';

import './MainPage.scss';
import SixthBlock from '../../components/MainPage/SixthBlock/SixthBlock';
import { Context } from '../../contexts/Context';

const MainPage = () => {
  const { setRegisterModal } = useContext(Context);
  return (
    <div className="main-page">
      <FirstBlock setRegisterModal={setRegisterModal} />
      <SecondBlock />
      <ThirdBlock />
      <ForthBlock />
      <SecondBanner />
      <FIfthBlock />
      <SixthBlock />
    </div>
  );
};

export default MainPage;
