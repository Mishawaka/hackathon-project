import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [filterChecks, setFilterChecks] = useState([]);
  const [findProjects, setFindProjects] = useState('');
  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        filterChecks,
        setFilterChecks,
        findProjects,
        setFindProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
