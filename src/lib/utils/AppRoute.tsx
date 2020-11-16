import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteProps {
  layout?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

function AppRoute({ layout: Layout, component: Component, ...rest }: IProps) {
  if (!Component) return null;
  if (!Layout) return <Route {...rest} component={Component} />;

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
}

export default AppRoute;
