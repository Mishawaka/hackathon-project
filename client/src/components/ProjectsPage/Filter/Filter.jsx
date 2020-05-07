import React, { useState, useContext } from 'react';
import { ProjectContext } from '../../../contexts/ProjectsContext';

import './Filter.scss';

const Filter = ({ checks, cities, toggleArrow, changeFind, setChangeFind }) => {
  const [find, setFind] = useState('');

  const { filterChecks, setFilterChecks } = useContext(ProjectContext);

  const uniqueChecks = checks.filter((el, id) => checks.indexOf(el) === id);

  const onChange = ({ checked, value }) => {
    if (checked) {
      setFilterChecks([...filterChecks, value]);
    } else {
      let arr = filterChecks.filter((el) => el !== value);
      setFilterChecks(arr);
    }
  };

  return (
    <div className="projects-filter">
      <div className="find">
        <input
          type="text"
          placeholder="Поиск"
          onChange={(e) => setChangeFind(e.target.value)}
          value={changeFind}
        />
      </div>
      <div className="checkboxes">
        <div className="checkboxes-block">
          <div className="name">
            <h4>Тематика</h4>
          </div>
          {uniqueChecks.map((el, id) => (
            <div key={id} className="form-group">
              <label className="auth-checkbox">
                {el}
                <input
                  onChange={({ target }) => onChange(target)}
                  type="checkbox"
                  className="checkbox"
                  value={el.toLowerCase()}
                />
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
