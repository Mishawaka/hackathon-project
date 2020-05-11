import React from 'react';

import './Sort.scss';

const Sort = () => (
  <div className="projects-sort">
    <select name="sort-projects" id="">
      <option value="update">По дате обновления</option>
      <option value="create">По дате создания</option>
    </select>
  </div>
);

export default Sort;
