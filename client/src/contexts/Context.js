import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [imagesModal, setImagesModal] = useState(false);
  const [auth, setAuth] = useState(false);
  const themes = [
    'помощь пожилым людям',
    'помощь сиротам',
    'помощь многодетным семьям',
    'помощь животным',
    'эко инициативы',
    'студенческие инициативы',
    'облагораживание города',
    'волонтерим и путешествуем',
  ];
  const cities = ['Одесса', 'Киев', 'Львов', 'Харьков', 'Днепр'];
  return (
    <Context.Provider
      value={{
        registerModal,
        setRegisterModal,
        authModal,
        setAuthModal,
        projectModal,
        setProjectModal,
        imagesModal,
        setImagesModal,
        eventModal,
        setEventModal,
        auth,
        setAuth,
        themes,
        cities,
      }}
    >
      {children}
    </Context.Provider>
  );
};
