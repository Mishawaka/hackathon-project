import React from 'react';
import Header from '../components/Header/Header';

export const withLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
