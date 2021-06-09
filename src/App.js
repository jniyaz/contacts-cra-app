import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './contexts/Provider';
import isAuthenticated from './utils/isAuthenticated';
import UserLeaveConfirmation from './components/UserLeaveConfirmation';

import 'semantic-ui-css/semantic.min.css';

const RenderRoute = (route) => {
  const history = useHistory();
  document.title = route.title || "Contacts";
  if (route.needsAuth && !isAuthenticated()) {
    history.push('/auth/login')
  }

  return (
    <Route path={route.path} exact render={(props) => <route.component {...props} />}></Route>
  );
}

function App() {
  const [confirmOpen, setConfirmOpen] = useState(true);

  return (
    <GlobalProvider>
      <Router getUserConfirmation={(message, callback) => {
        return UserLeaveConfirmation(message, callback, confirmOpen, setConfirmOpen);
      }}>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
