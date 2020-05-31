import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrRight from '../../../img/arrow-right.svg';

import './Items.scss';

const Items = ({ projects, changeFind, changeCity, filterChecks, sort }) => {
  const [proj, setProj] = useState(projects);

  useEffect(() => {
    setProj(projects);
    if (projects.length !== 0) {
      let arr = [...projects];
      if (arr.length > 1) {
        if (sort === 'update') {
          arr = arr.sort((a, b) =>
            b.lastEvent && a.lastEvent ? b.lastEvent - a.lastEvent : 1
          );
          setProj(arr);
        }
        if (changeFind.length !== 0) {
          const reg = new RegExp(changeFind);
          arr = arr.filter(
            ({ name, descr, org }) =>
              reg.test(name) || reg.test(org) || reg.test(descr)
          );
          setProj(arr);
        }
      }
      if (changeCity.length !== 0) {
        arr = projects.filter((el) => el.city == changeCity);
        setProj(arr);
      }
      if (filterChecks.length !== 0) {
        arr = arr.filter((el) => filterChecks.includes(el.theme.toLowerCase()));
        setProj(arr);
      }
    }
  }, [filterChecks, changeFind, changeCity, sort, projects]);

  return (
    <div className="projects-items">
      {proj.length > 0 &&
        proj.map((pr, id) => (
          <div key={id} className="project-item">
            <img
              src={`http://${process.env.REACT_APP_ROOT}/image/${pr.imageUrl}`}
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
    </div>
  );
};

export default Items;
