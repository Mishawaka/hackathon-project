import React from 'react';

import './EventBlock.scss';
import line_text from '../../../img/line3.svg';

const EventBlock = () => (
    <div className="event-block">
        <div className="event-line-top" />
        <div className="title-block">
            <h2>Ближайшие мероприятия</h2>
            <img src={line_text} alt=""/>
        </div>
        <div className="event-line-bottom" />
    </div>
)

export default EventBlock;