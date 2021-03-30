import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { authOperations } from "./redux/auth";
import { CSSTransition } from "react-transition-group";
import routes from "./routes";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authSelectors } from "./redux/auth/index";

import Loaders from "./components/shared/Loader/Loader";
import GoToLink from "./components/GoToLinkNotification/GoToLink";
import goToLinkStyles from "./components/GoToLinkNotification/GoToLink.module.scss";

function App() {
  const dispatch = useDispatch();
  const emailNotVerified = useSelector(authSelectors.getIsNotVerified);
  const [isMailVerified, setIsMailVerified] = useState(false);

  useEffect(() => {
    dispatch(authOperations.getCurrrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (emailNotVerified) {
      setIsMailVerified(true);
      setTimeout(() => setIsMailVerified(false), 5000);
    }
  }, [emailNotVerified]);
  //TODO переделать мапинг раутов с учётом приватных и публичных раутов
  const routesMap = routes.map((route) => {
    return route.privated ? (
      <PrivateRoute key={route.path} {...route} />
    ) : (
      <PublicRoute key={route.path} {...route} />
    );
  });

  return (
    <>
      <Suspense fallback={<Loaders />}>
        <Layout>
          <Switch>{routesMap}</Switch>
          <CSSTransition
            in={isMailVerified}
            timeout={2500}
            classNames={goToLinkStyles}
            unmountOnExit
          >
            <GoToLink />
          </CSSTransition>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
