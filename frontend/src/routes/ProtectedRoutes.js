import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from ".";
import HomePage from "pages/Home";

const ProtectedRoutes = () => (
  <Switch>
    <HomePage>
      <Suspense fallback={"Loading"}>
        {routes.map(({ component: Component, path, exact }) => (
          <Route path={`/${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))}
      </Suspense>
    </HomePage>
  </Switch>
);

export default ProtectedRoutes;
