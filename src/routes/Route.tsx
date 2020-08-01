import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

interface ComponentProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const RouteWrapper: React.FC<ComponentProps> = (
  { component: Component },
  rest,
) => (
  <Route
    {...rest}
    render={props => <Layout component={Component} {...props} />}
  />
);

export default RouteWrapper;
