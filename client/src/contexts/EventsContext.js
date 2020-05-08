import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filterChecks, setFilterChecks] = useState([]);
  const [findEvents, setFindEvents] = useState('');
  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        filterChecks,
        setFilterChecks,
        findEvents,
        setFindEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};