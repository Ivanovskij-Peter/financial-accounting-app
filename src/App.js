import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthForm from "./components/AuthForm";


// import Modal from './components/shared/Modal/Modal';
import Header from './components/header';

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

      <Header isLogged={true}/>
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