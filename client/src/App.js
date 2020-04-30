import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './router/MainPage/MainPage';
import RegisterPage from './router/RegisterPage/RegisterPage';
import { withLayout } from './layout/Layout';

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper path="/" component={MainPage} layout={withLayout} exact />
        <Route
          path="/register"
          component={RegisterPage}
          layout={withLayout}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
