import React, { useState, useEffect } from 'react';
import arrRight from '../../../img/arrow-right.svg';
import rocket from '../../../img/rocket.svg';

const Items = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get-all-projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorage.getItem('jwt') }),
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projects-items">
      {users.map((user, id) => (
        <div key={id} className="item">
          <img
            src={`http://localhost:8000/image/${user.imageUrl}`}
            alt="rocket"
          />
          <h4>{user.name}</h4>
          <p>{user.descr}</p>
          <div>
            <p>Тема: {user.theme}</p>
            <img src={arrRight} alt="arrow-right" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
