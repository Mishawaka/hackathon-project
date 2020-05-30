import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filterChecks, setFilterChecks] = useState([]);
  const [date, setDate] = useState('');
  const [eventId, setEventId] = useState('');
  const [prForEvent, setPrForEvent] = useState([]);
  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        filterChecks,
        setFilterChecks,
        date,
        setDate,
        eventId,
        setEventId,
        prForEvent,
        setPrForEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
