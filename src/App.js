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

// import IncomesCostsSection from './components/IncomesCostsSection';

// import AddIncomeCostForm from "./components/AddIncomeCostForm";
// import Summary from "./components/Summary/Summary";
// import CurrentPeriod from "./components/CurrentPeriod/CurrentPeriod";

// import Modal from './components/shared/Modal/Modal';

// import IncomesList from "./components/IncomesList";

function App() {
  const dispatch = useDispatch();
  const emailNotVerified = useSelector(authSelectors.getIsNotVerified);
  const [isMailVerified, setIsMailVerified] = useState(false);
  useEffect(() => {
    dispatch(authOperations.getCurrrentUser());
  }, [dispatch]);

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
