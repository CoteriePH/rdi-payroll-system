import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={() =>
        !isAuth ? (
          children
        ) : (
          <>
            <Redirect to="/" />
          </>
        )
      }
    />
  );
};

export default PublicRoute;
