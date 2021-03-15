
import { CSSTransition } from 'react-transition-group';
import Notification from './components/Notification/Notification';
import notificationStyles from './components/Notification/notification.module.scss';


// import Modal from './components/shared/Modal/Modal';
import Header from './components/header';


function App() {
  return (
    <div>

      {/* <Modal /> */}
      <Notification />

      <Header isLogged={true}/>
      <h1>Go to work guys!</h1>
    </div>
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