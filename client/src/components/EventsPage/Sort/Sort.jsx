import React from 'react';

import './Sort.scss';

const Sort = ({ toggleArrow }) => (
  <div className="events-sort">
    <select onClick={toggleArrow} name="sort-event" id="">
      <option value="update">По дате обновления</option>
      <option value="create">По дате создания</option>
    </select>
  </div>
);

export default Sort;
