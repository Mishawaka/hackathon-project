import React from 'react';

import './EventContainer.scss';
import rocket_img from '../../../../img/rocket.svg';
import arrow_img from '../../../../img/arrow_main.svg';

const EventContainer = () => {
    const s = [
        {
            img: rocket_img,
            title: 'Воркшоп',
            description: '“Даем рабшке 2 жизнь”',
            city: 'Одесса',
            street: 'Ул.Решильевская 25',
            date_time: '19:00',
            date_day: '18 мартa',
            theme: 'Экология'
        },
        {
            img: rocket_img,
            title: 'Воркшоп',
            description: '“Даем рабшке 2 жизнь”',
            city: 'Одесса',
            street: 'Ул.Решильевская 25',
            date_time: '19:00',
            date_day: '18 мартa',
            theme: 'Экология'
        },
        {
            img: rocket_img,
            title: 'Воркшоп',
            description: '“Даем рабшке 2 жизнь”',
            city: 'Одесса',
            street: 'Ул.Решильевская 25',
            date_time: '19:00',
            date_day: '18 мартa',
            theme: 'Экология'
        },
        {
            img: rocket_img,
            title: 'Воркшоп',
            description: '“Даем рабшке 2 жизнь”',
            city: 'Одесса',
            street: 'Ул.Решильевская 25',
            date_time: '19:00',
            date_day: '18 мартa',
            theme: 'Экология'
        },
    ];

    return (
        <div className="event-b">
            {s.map((event, id) => (
            <div key={id} className="event-container">
                <div className="event-container-top">
                    <div>
                        <p>{event.city}</p>
                        <p>{event.street}</p>
                    </div>
                    <div>
                        <p>{event.date_day}</p>
                        <p>{event.date_time}</p>
                    </div>
                </div>
                <div className="event-container-center">
                    <img src={event.img} alt=""/>
                    <h4>{event.title}</h4>
                    <h4>{event.description}</h4>
                </div>
                <div className="event-container-bottom">
                    <p>Тема: {event.theme}</p>
                    <img src={arrow_img} alt=""/>
                </div>
            </div>
            ))}
        </div>
    )
}

export default EventContainer;
