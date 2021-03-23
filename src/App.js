import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { authOperations } from "./redux/auth";
import routes from "./routes";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loaders from "./components/shared/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrrentUser());
  }, [dispatch]);

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
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
