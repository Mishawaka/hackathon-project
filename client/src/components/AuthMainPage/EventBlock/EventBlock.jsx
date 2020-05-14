import React from 'react';

import './EventBlock.scss';
import line_text from '../../../img/line3.svg';
import EventContainer from './EventContainer/EventContainer';
import { Link } from 'react-router-dom';

const EventBlock = () => (
    <div className="event-block">
        <div className="event-line-top" />
        <div className="title-block">
            <h2>Ближайшие мероприятия</h2>
            <img src={line_text} alt=""/>
        </div>
        <EventContainer />
        <Link to="/events">
            <h4 className="link-event">Посмотреть все</h4>
        </Link>
        <div className="event-line-bottom" />
    </div>
)

export default EventBlock;