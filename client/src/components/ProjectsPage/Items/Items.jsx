import React, { useContext, useEffect, useState } from 'react';
import arrRight from '../../../img/arrow-right.svg';
import { ProjectContext } from '../../../contexts/ProjectsContext';

import './Items.scss';

const Items = ({ projects, changeFind }) => {
  const { filterChecks } = useContext(ProjectContext);
  const [proj, setProj] = useState(projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProj(projects);
    if (filterChecks.length === 0) {
      setProj(projects);
    } else {
      let arr = projects.filter((el) =>
        filterChecks.includes(el.theme.toLowerCase())
      );
      setProj(arr);
    }
    setLoading(false);
  }, [projects, filterChecks, changeFind]);

  useEffect(() => {
    if (changeFind.length !== 0) {
      const reg = new RegExp(changeFind);
      let arr = proj.filter(
        ({ name, theme, descr, org }) =>
          reg.test(name) || reg.test(org) || reg.test(descr)
      );
      setProj(arr);
    } else {
      setProj(projects);
    }
  }, [changeFind]);

  return (
    <div
      style={{ display: proj.length === 0 ? 'none' : 'grid' }}
      className="projects-items"
    >
      {proj.map((pr, id) => (
        <div key={id} className="project-item">
          <img
            src={`http://localhost:8000/image/${pr.imageUrl}`}
            alt="rocket"
          />
          <h4>{pr.name}</h4>
          <p>{pr.descr}</p>
          <div>
            <p>Тема: {pr.theme}</p>
            <img src={arrRight} alt="arrow-right" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
