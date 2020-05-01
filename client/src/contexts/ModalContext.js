import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{ registerModal, setRegisterModal, authModal, setAuthModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
