import { Suspense } from "react";
// import { CSSTransition } from "react-transition-group";

// import Notification from "./components/Notification/Notification";
// import notificationStyles from "./components/Notification/notification.module.scss";
import { Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ReportsSection from "./components/Reports/Reports.jsx";
import Header from "./components/header";

import Layout from "./components/Layout/Layout";
// import Modal from './components/shared/Modal/Modal';

import PublicRoute from "./components/PublicRoute";

function App() {
  //TODO переделать мапинг раутов с учётом приватных и публичных раутов
  // const routesMap = routes.map(route => {
  //   return route.privated ? (
  //     <PrivateRoute key={route.path} {...route} />
  //   ) : (
  //     <PublicRoute key={route.path} {...route} />
  //   );
  // });

  // Modal test!!! /////////////
  //   const [ showModal, setShowModal ] = useState(false)
  // const toggleModal = () => {
  //   setShowModal(!showModal)
  // }

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
      <ReportsSection />
      {/* //TODO поменять на нормальный лоадер */}
      {/* 
      <Notification /> */}

      {/* <Header /> */}
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={AuthForm} />
            <PublicRoute exact path="/register" component={AuthForm} />
            <PublicRoute exact path="/login" component={AuthForm} />
            {/* <Route exact path="/register" component={AuthForm} /> */}
            {/* <Route exact path="/login" component={AuthForm} /> */}
            {/* <Route exact path="/" component={AuthForm} /> */}

            {/* <Redirect to="/" /> */}
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
