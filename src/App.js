import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Notification from "./components/Notification/Notification";
import notificationStyles from "./components/Notification/notification.module.scss";
import AuthForm from "./components/AuthForm";

function App() {
  //TODO переделать мапинг раутов с учётом приватных и публичных раутов
  // const routesMap = routes.map(route => {
  //   return route.privated ? (
  //     <PrivateRoute key={route.path} {...route} />
  //   ) : (
  //     <PublicRoute key={route.path} {...route} />
  //   );
  // });

  return (
    <>
      {/* //TODO поменять на нормальный лоадер */}
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/register" component={AuthForm} />
          <Route exact path="/login" component={AuthForm} />
          <Route exact path="/" component={AuthForm} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
