import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import './ProjectContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrRight from '../../../../img/arrow-right.svg';

const ProjectContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/get-all-projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
      })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: false,
    };

   return (
    <div className="project-container">
        <Slider {...settings}>
            {users.map((user, id) => (
                <div key={id} className="project-b">
                    <img
                        src={`http://localhost:8000/image/${user.imageUrl}`}
                        alt="rocket"
                    />                                                                                                                  
                    <h4>{user.name}</h4>
                    <p>{user.descr}</p>
                    <div>
                        <p>Тема: {user.theme}</p>
                        <img src={arrRight} alt="arrow-right" />
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                </div>
            ))}
        </Slider>
    </div>
   )
}

export default ProjectContainer;