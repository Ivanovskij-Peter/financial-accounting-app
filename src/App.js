import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AuthForm from "./components/AuthForm";

// import CurrentPeriod from "./components/CurrentPeriod/CurrentPeriod";
import Layout from "./components/Layout/Layout";

import HomePage from "./components/pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loaders from "./components/shared/Loader/Loader";
import ReportsPage from "./components/pages/ReportsPage";
import Chart from "./components/Chart";
import { authOperations } from "./redux/auth";
import Summary from "./components/Summary/Summary";
// import IncomesCostsSection from './components/IncomesCostsSection';

// import AddIncomeCostForm from "./components/AddIncomeCostForm";

// import { CSSTransition } from "react-transition-group";
// import Notification from "./components/Notification/Notification";
// import notificationStyles from "./components/Notification/notification.module.scss";
import CurrentPeriod from "./components/CurrentPeriod/CurrentPeriod";
import getData from "./redux/auth/auth-selectors";
import GoToLink from "./components/GoToLinkNotification/GoToLink";
import goToLinkStyles from "./components/GoToLinkNotification/GoToLink.module.scss";
// import Modal from './components/shared/Modal/Modal';

// import IncomesList from "./components/IncomesList";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(getData.getToken);
  const name = useSelector(getData.getName);
  useEffect(() => {
    if (!name) {
      dispatch(authOperations.getCurrrentUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // const [showNotification, setShowNotification] = useState(token);
  // useEffect(() => {
  //   setTimeout(() => setShowNotification(false), 2500
  //   )
  //   return
  // }, [token])
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
      {/* <Chart/> */}

      <CurrentPeriod/>
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
                component={ReportsPage}
                redirectTo="/login"
              />
            </Switch>
          </Layout>
        </Suspense>

        {/* <IncomesCostsSection /> */}
      </>
    </>
  );
}

export default App;
