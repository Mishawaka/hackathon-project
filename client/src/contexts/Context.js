import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [auth, setAuth] = useState(false);
  return (
    <Context.Provider
      value={{
        registerModal,
        setRegisterModal,
        authModal,
        setAuthModal,
        projectModal,
        setProjectModal,
        auth,
        setAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};
