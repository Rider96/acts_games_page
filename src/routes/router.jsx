import { Route, Switch, Redirect } from "react-router-dom";

import Main from "../pages/main";

const Router = () => {
  return (
    <Switch>
      <Route exact={true} path="/main" component={Main} />

      {/* Not Found */}
      <Route component={() => <Redirect to="/main" />} />
    </Switch>
  );
};

export default Router;
