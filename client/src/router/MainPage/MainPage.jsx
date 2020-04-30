import React from 'react';
import FirstBlock from '../../components/MainPage/FirstBlock/FirstBlock';
import SecondBlock from '../../components/MainPage/SecondBlock/SecondBlock';
import ThirdBlock from '../../components/MainPage/ThirdBlock/ThirdBlock';

import './MainPage.scss';

const MainPage = () => (
    <div className="main-page">
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
    </div>
)

export default MainPage;