import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation, useHistory } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  // const history = useHistory();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={() =>
        !isAuth ? (
          children
        ) : (
          <>
            <Redirect
              // to={{
              //   pathname: `${history.location.state.from.pathname}`,
              //   state: { from: location }
              // }}
              to="/"
            />
          </>
        )
      }
    />
  );
};

export default PublicRoute;
