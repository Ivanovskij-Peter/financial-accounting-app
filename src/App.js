import { CSSTransition } from 'react-transition-group';
import Notification from './components/Notification/Notification';
import notificationStyles from './components/Notification/notification.module.scss';

function App() {
  return (
    <div>
      <Notification />

      <h1>Go to work guys!</h1>
    </div>
  );
}

export default App;
