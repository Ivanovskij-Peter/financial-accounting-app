import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm";

import CurrentPeriod from "./components/CurrentPeriod/CurrentPeriod";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loaders from "./components/shared/Loader/Loader";
import Reports from "./components/Reports";
import { authOperations } from "./redux/auth";

import AddIncomeCostForm from "./components/AddIncomeCostForm";

// import { CSSTransition } from "react-transition-group";
// import Notification from "./components/Notification/Notification";
// import notificationStyles from "./components/Notification/notification.module.scss";
// import Modal from './components/shared/Modal/Modal';

// import IncomesList from "./components/IncomesList";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const name = useSelector((state) => state.auth.user.name);
  useEffect(() => {
    if (!name) {
      dispatch(authOperations.getCurrrentUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
            <PublicRoute exact path="/register" component={AuthForm} />
            <PublicRoute exact path="/login" component={AuthForm} />
            <PrivateRoute exact path="/" component={HomePage} redirectTo="" />
            <PrivateRoute
              exact
              path="/reports"
              component={Reports}
              redirectTo="/login"
            />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
