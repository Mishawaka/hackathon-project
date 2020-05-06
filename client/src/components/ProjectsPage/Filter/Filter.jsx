import React, { useState } from 'react';

import './Filter.scss';

const Filter = ({ checks, cities, toggleArrow }) => {
  const [find, setFind] = useState('');

  return (
    <div className="projects-filter">
      <div className="find">
        <input
          type="text"
          placeholder="Поиск"
          onChange={(e) => setFind(e.target.value)}
          value={find}
        />
      </div>
      <div className="checkboxes">
        <div className="checkboxes-block">
          <div className="name">
            <h4>Тематика</h4>
            {/* <img src={arrDown} alt="arrow-down" /> */}
          </div>
          {checks.map((el, id) => (
            <div key={id} className="form-group">
              <label className="auth-checkbox">
                {el.name}
                <input type="checkbox" className="checkbox" value={el.value} />
                <span className="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="checkboxes">
        <div className="checkboxes-block">
          <div className="name">
            <h4>Город</h4>
          </div>
          <div className="form-group">
            <select
              onClick={toggleArrow}
              name="sort-projects"
              className="city"
              id=""
            >
              {cities.map((el, id) => (
                <option key={id} value={el.value}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
