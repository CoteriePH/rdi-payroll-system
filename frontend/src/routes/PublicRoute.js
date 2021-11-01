import { Route, Redirect, useHistory } from 'react-router-dom';

const PublicRoute = ({ children, isAuth, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
          children
        ) : (
          <>
            <Redirect
              to={{
                pathname: `${history.location.state.from.pathname}`,
                state: { from: location }
              }}
            />
          </>
        )
      }
    />
  );
};

export default PublicRoute;
