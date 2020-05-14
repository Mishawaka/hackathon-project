import React, { useContext, useEffect } from 'react';
import { Slider } from '../../Slider';
import arrRight from '../../../img/arrow-right.svg';
import { ProjectContext } from '../../../contexts/ProjectsContext';
import { Context } from '../../../contexts/Context';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './Events.scss';
import { Link } from 'react-router-dom';

const Events = ({ project }) => {
  const viewportWidth = window.innerWidth;
  const viewport = () => {
    if (viewportWidth >= 1750) return 4;
    if (viewportWidth > 900 && viewportWidth < 1750) return 3;
    if (viewportWidth <= 900) return 1;
  };

  const { projects, setProjects } = useContext(ProjectContext);
  const { auth } = useContext(Context);

  useEffect(() => {
    if (projects.length === 0) {
      fetch('http://localhost:8000/get-all-projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
      })
        .then((res) => {
          if (res.status === 401) {
            localStorage.removeItem('jwt');
            window.location.replace('/');
          } else {
            return res.json();
          }
        })
        .then((data) => setProjects(data))
        .catch((err) => console.log(err));
    }
  }, [auth]);

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
    <div className="project-events">
      <h1>ближайшие ивенты</h1>
      <Slider {...settings}>
        {projects.map((pr, id) => (
          <div className="event-item">
            <div className="item-flex">
              <div>
                <p>Одесса</p>
                <p>Ул. Ришельевская, 25</p>
              </div>
              <div>
                <p>18 марта</p>
                <p>19:00</p>
              </div>
            </div>
            <img
              src={`http://localhost:8000/image/${pr.imageUrl}`}
              alt="rocket"
            />
            <h4>{pr.name}</h4>
            <p>{pr.descr}</p>
            <div>
              <p>Тема: {pr.theme}</p>
              <Link to={'/project/' + pr.name}>
                <img src={arrRight} alt="arrow-right" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Events;
