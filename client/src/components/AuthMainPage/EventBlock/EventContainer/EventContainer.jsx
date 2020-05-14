import React from 'react';
import { Slider } from '../../../Slider';

import './EventContainer.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import rocket_img from '../../../../img/rocket.svg';
import arrow_img from '../../../../img/arrow_main.svg';

const EventContainer = ({ projects }) => {
    // const s = [
    //     {
    //         img: rocket_img,
    //         title: 'Воркшоп',
    //         description: '“Даем рабшке 2 жизнь”',
    //         city: 'Одесса',
    //         street: 'Ул.Решильевская 25',
    //         date_time: '19:00',
    //         date_day: '18 мартa',
    //         theme: 'Экология'
    //     },
    //     {
    //         img: rocket_img,
    //         title: 'Воркшоп',
    //         description: '“Даем рабшке 2 жизнь”',
    //         city: 'Одесса',
    //         street: 'Ул.Решильевская 25',
    //         date_time: '19:00',
    //         date_day: '18 мартa',
    //         theme: 'Экология'
    //     },
    //     {
    //         img: rocket_img,
    //         title: 'Воркшоп',
    //         description: '“Даем рабшке 2 жизнь”',
    //         city: 'Одесса',
    //         street: 'Ул.Решильевская 25',
    //         date_time: '19:00',
    //         date_day: '18 мартa',
    //         theme: 'Экология'
    //     },
    //     {
    //         img: rocket_img,
    //         title: 'Воркшоп',
    //         description: '“Даем рабшке 2 жизнь”',
    //         city: 'Одесса',
    //         street: 'Ул.Решильевская 25',
    //         date_time: '19:00',
    //         date_day: '18 мартa',
    //         theme: 'Экология'
    //     },
    // ];

    const viewportWidth = window.innerWidth;
    const viewport = () => {
      if (viewportWidth >= 1750) return 4;
      if (viewportWidth > 900 && viewportWidth < 1750) return 3;
      if (viewportWidth <= 900) return 1;
    };
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: viewport(),
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      arrows: false,
    };
 
    return (
        <div className="event-b">
            <Slider {...settings}>
                {projects.map((event, id) => (
                <div key={id} className="event-container">
                    <div className="event-container-top">
                        <div>
                            <p>Одесса</p>
                            <p>Улица</p>
                        </div>
                        <div>
                            <p>18 мартa</p>
                            <p>19:00</p>
                        </div>
                    </div>
                    <div className="event-container-center">
                        <img src={`http://localhost:8000/image/${event.imageUrl}`} alt=""/>
                        <h4>{event.name}</h4>
                        <h4>{event.descr}</h4>
                    </div>
                    <div className="event-container-bottom">
                        <p>Тема: {event.theme}</p>
                        <img src={arrow_img} alt=""/>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    )
}

export default EventContainer;
