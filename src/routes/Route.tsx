import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

interface Props {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const RouteWrapper: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
