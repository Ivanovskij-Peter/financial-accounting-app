import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loaders from "./components/shared/Loader/Loader";
import ReportsPage from "./components/pages/ReportsPage";
import { authOperations } from "./redux/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrrentUser());
  }, [dispatch]);

  //TODO переделать мапинг раутов с учётом приватных и публичных раутов
  // const routesMap = routes.map(route => {
  //   return route.privated ? (
  //     <PrivateRoute key={route.path} {...route} />
  //   ) : (
  //     <PublicRoute key={route.path} {...route} />
  //   );
  // });

  // Modal methods use this in your component methods!! //
  //   const [ showModal, setShowModal ] = useState(false)
  // const toggleModal = () => {
  //   setShowModal(!showModal)
  // }
  // Use this in your component return!! //
  /* <button type='button' onClick={toggleModal}>OpenModal</button>
    {showModal && (
    <Modal title="Вы уверены?" onClick={toggleModal}/>
  )} */

  return (
    <>
      <Suspense fallback={<Loaders />}>
        <Layout>
          <Switch>
            <PublicRoute
              exact
              path="/register"
              component={AuthForm}
              restricted
              redirectTo="/"
            />
            <PublicRoute
              exact
              path="/login"
              component={AuthForm}
              restricted
              redirectTo="/"
            />
            <PrivateRoute
              exact
              path="/"
              component={HomePage}
              redirectTo="/login"
            />
            <PrivateRoute
              path="/reports"
              component={ReportsPage}
              redirectTo="/reports"
            />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
