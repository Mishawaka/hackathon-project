import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './router/MainPage/MainPage';
import ProjectsPage from './router/ProjectsPage/ProjectsPage';

import { withLayout } from './layout/Layout';
import { ModalProvider } from './contexts/ModalContext';

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <ModalProvider>
      <Switch>
        <RouteWrapper path="/" component={MainPage} layout={withLayout} exact />
        <RouteWrapper
          path="/projects"
          component={ProjectsPage}
          layout={withLayout}
          exact
        />
      </Switch>
    </ModalProvider>
  </BrowserRouter>
);

export default App;
