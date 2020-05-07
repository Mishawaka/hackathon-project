import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './ProjectPage.scss';

const ProjectPage = () => {
  const { name } = useParams();
  const [project, setProject] = useState();
  useEffect(() => {
    fetch('http://localhost:8000/get-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorage.getItem('jwt'), name }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {project && (
        <div>
          <h4>hello world</h4>
          <h4>{project.theme}</h4>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
