import React from 'react';

const Sort = ({ toggleArrow }) => (
  <div className="projects-sort">
    <select onClick={toggleArrow} name="sort-projects" id="">
      <option value="update">По дате обновления</option>
      <option value="create">По дате создания</option>
    </select>
  </div>
);

export default Sort;
