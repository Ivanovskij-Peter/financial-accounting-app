import { CSSTransition } from 'react-transition-group';
import Notification from './components/Notification/Notification';
import notificationStyles from './components/Notification/notification.module.scss';
import Balance from './components/Balance/index.js'

function App() {
  return (
    <div>
      {/* <Notification /> */}
      <Balance/>
      {/* <h1>Go to work guys!</h1> */}
    </div>
  );
}

export default App;
