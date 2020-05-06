import React from 'react';
import arrRight from '../../../img/arrow-right.svg';
import rocket from '../../../img/rocket.svg';

import './Items.scss';

const Items = () => {
  return (
    <div className="projects-items">
      <div className="item">
        <img src={rocket} alt="rocket" />
        <h4>PERERABOTKA</h4>
        <p>
          Эко-организация. Занимаемся проведением ярморок, лекций, воркшопов на
          тему экологии.
        </p>
        <div>
          <p>Тема: экология</p>
          <img src={arrRight} alt="arrow-right" />
        </div>
      </div>
      <div className="item">
        <img src={rocket} alt="rocket" />
        <h4>PERERABOTKA</h4>
        <p>
          Эко-организация. Занимаемся проведением ярморок, лекций, воркшопов на
          тему экологии.
        </p>
        <div>
          <p>Тема: экология</p>
          <img src={arrRight} alt="arrow-right" />
        </div>
      </div>
      <div className="item">
        <img src={rocket} alt="rocket" />
        <h4>PERERABOTKA</h4>
        <p>
          Эко-организация. Занимаемся проведением ярморок, лекций, воркшопов на
          тему экологии.
        </p>
        <div>
          <p>Тема: экология</p>
          <img src={arrRight} alt="arrow-right" />
        </div>
      </div>
      {/* <div className="item">
            <img src={rocket} alt="rocket" />
            <h4>PERERABOTKA</h4>
            <p>
              Эко-организация. Занимаемся проведением ярморок, лекций, воркшопов
              на тему экологии.
            </p>
            <div>
              <p>Тема: экология</p>
              <img src={arrRight} alt="arrow-right" />
            </div>
          </div> */}
      {/* <div className="item">
            <img src={rocket} alt="rocket" />
            <h4>PERERABOTKA</h4>
            <p>
              Эко-организация. Занимаемся проведением ярморок, лекций, воркшопов
              на тему экологии.
            </p>
            <div>
              <p>Тема: экология</p>
              <img src={arrRight} alt="arrow-right" />
            </div>
          </div> */}
      {/* <div className="item">
            <img src={rocket} alt="rocket" />
            <h4>PERERABOTKA</h4>
            <p>
              Эко-организация. Занимаемся проведением ярморок, лекций, воркшопов
              на тему экологии.
            </p>
            <div>
              <p>Тема: экология</p>
              <img src={arrRight} alt="arrow-right" />
            </div>
          </div> */}
    </div>
  );
};

export default Items;
