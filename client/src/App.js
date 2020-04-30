import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import MainPage from './router/MainPage/MainPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
