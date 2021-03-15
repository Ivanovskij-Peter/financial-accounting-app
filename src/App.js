import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Notification from "./components/Notification/Notification";
import notificationStyles from "./components/Notification/notification.module.scss";
import AuthForm from "./components/AuthForm";

import Layout from './components/Layout/Layout';
// import Modal from './components/shared/Modal/Modal';
// import Header from './components/header';

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

// ///////////////////////

  return (
    <>
    {/* <button type='button' onClick={toggleModal}>OpenModal</button>
    {showModal && (
    <Modal title="Вы уверены?" onClick={toggleModal}/>
    )} */}


      {/* //TODO поменять на нормальный лоадер */}
     {/* <Notification /> */}
<Layout>
      {/* <Header isLogged={true}/> */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* <Switch>
          <Route exact path="/register" component={AuthForm} />
          <Route exact path="/login" component={AuthForm} />
          <Route exact path="/" component={AuthForm} />
          <Redirect to="/" />
        </Switch> */}
      </Suspense>
</Layout>
    </>
  );
}

export default App;