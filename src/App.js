import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CSSTransition } from "react-transition-group";

// import Notification from "./components/Notification/Notification";
// import notificationStyles from "./components/Notification/notification.module.scss";
import { Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm";

// import Modal from './components/shared/Modal/Modal';

import Header from "./components/header";
import PublicRoute from "./components/PublicRoute";
import Loaders from "./components/shared/Loader/Loader";
import { authOperations } from "./redux/auth";

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
      {/* 
      <Notification /> */}

      <Header />
      <Suspense fallback={<Loaders />}>
        <Switch>
          <PublicRoute exact path="/" component={AuthForm} />
          <PublicRoute
            exact
            path="/register"
            component={AuthForm}
            redirectTo=""
          />
          <PublicRoute
            exact
            path="/login"
            component={AuthForm}
            redirectTo="/balance"
          />
          {/* <Route exact path="/register" component={AuthForm} /> */}
          {/* <Route exact path="/login" component={AuthForm} /> */}
          {/* <Route exact path="/" component={AuthForm} /> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

// import React, { Component } from 'react';

// class App extends Component {

//     state = {
//       showModal: false,
//     }

//     toggleModal = () => {
//       this.setState(state => ({showModal: !state.showModal}))
//     }

//     render() {
//       const {showModal} = this.state;
//       return(
//         <div>
//           <button type='button' onClick={this.toggleModal}>Exit</button>

//           {showModal && (
//           <Modal onClick={this.toggleModal}>
//             Вы действительно хотите выйти?
//           </Modal>
//           )}

//         </div>
//       )
//     }
//   }
//   export default App;
