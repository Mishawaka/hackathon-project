import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrRight from '../../../img/arrow-right.svg';

import './Items.scss';

const Items = ({ projects, changeFind, changeCity, filterChecks, sort }) => {
  const [proj, setProj] = useState(projects);
  const [names, setNames] = useState([]);

  useEffect(() => {
    setProj(projects);
    let arr = [...proj];
    if (sort === 'date') {
      arr = proj.reverse();
    }
    if (filterChecks.length !== 0) {
      arr = arr.filter((el) => filterChecks.includes(el.theme.toLowerCase()));
      setProj(arr);
    }
    if (changeCity.length !== 0) {
      arr = arr.filter((el) => el.city === changeCity);
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
  }, [projects, filterChecks, changeFind, changeCity, sort]);

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
