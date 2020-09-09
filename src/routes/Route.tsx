import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

interface Props {
  component: React.FC;
  path: string;
  withoutBack?: boolean;
  exact?: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  withoutBack,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props} withoutBack={withoutBack}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
