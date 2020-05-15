import React from 'react';

import './Sort.scss';

const Sort = ({ onSortChange }) => (
  <div className="projects-sort">
    <select
      onChange={({ target }) => onSortChange(target.id)}
      name="sort-projects"
      id=""
    >
      <option id="date" selected value="create">
        По дате создания
      </option>
      <option id="update" value="update">
        По дате обновления
      </option>
    </select>
  </div>
);

export default Sort;
