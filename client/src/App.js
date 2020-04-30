import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import MainPage from './router/MainPage/MainPage'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={MainPage} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
