import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authSelector } from "features/auth/authSlice.js";
import ProtectedRoutes from "routes/ProtectedRoutes";
import LoginPage from "pages/Login";
import NoFoundComponent from "pages/NoFoundComponent";

toast.configure({ limit: 3 });

function App() {
  const { isFetching } = useSelector(authSelector);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
    else setIsAuth(false);
  }, [isFetching]);

  return (
    <>
      <Suspense fallback={"Loading"}>
        <Switch>
          <Route path="/login">
            {!isAuth ? <LoginPage></LoginPage> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {isAuth ? (
              <ProtectedRoutes></ProtectedRoutes>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="*">
            <NoFoundComponent />
          </Route>
          {/* <PublicRoute path="/login" isAuth={isAuth}>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/" isAuth={isAuth}>
            <ProtectedRoutes />
          </PrivateRoute>
          <Route path="*">
            <NoFoundComponent />
          </Route> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
