import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './Filter.scss';

const Filter = ({
  checks,
  cities,
  themes,
  setChangeCity,
  filterChecks,
  setFilterChecks,
  date,
  setDate,
}) => {
  const onChange = ({ checked, value }) => {
    if (checked) {
      setFilterChecks([...filterChecks, value]);
    } else {
      let arr = filterChecks.filter((el) => el !== value);
      setFilterChecks(arr);
    }
  };

  const onDateChange = (e) => {
    if (e.toString() === date.toString()) {
      setDate('');
    } else {
      setDate(e);
    }
  };

  return (
    <div className="events-filter">
      <div className="find">
        <Calendar
          value={date || new Date()}
          onChange={(e) => onDateChange(e)}
        />
      </div>
      <div className="checkboxes">
        <div className="checkboxes-block">
          <div className="name">
            <h4>Тематика</h4>
          </div>
          {checks &&
            themes.map((el, id) => (
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
              onChange={(e) => setChangeCity(e.target.value)}
              name="sort-projects"
              className="city"
            >
              <option value="">Все города</option>
              {cities.map((el, id) => (
                <option key={id} value={el}>
                  {el}
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
