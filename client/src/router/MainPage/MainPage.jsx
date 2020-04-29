import React from 'react';
import FirstBlock from '../../components/MainPage/FirstBlock/FirstBlock';

import './MainPage.scss';
import SecondBlock from '../../components/MainPage/SecondBlock/SecondBlock';

const MainPage = () => (
    <div className="main-page">
        <FirstBlock />
        <SecondBlock />
    </div>
)

export default MainPage;