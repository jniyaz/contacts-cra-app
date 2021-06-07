import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './contexts/Provider';
import isAuthenticated from './utils/isAuthenticated';

import 'semantic-ui-css/semantic.min.css';

const RenderRoute = (route) => {
  const history = useHistory();
  document.title = route.title || "My Contacts";
  if (route.needsAuth && !isAuthenticated()) {
    history.push('/auth/login')
  }

  return (
    <Route path={route.path} exact render={(props) => <route.component {...props} />}></Route>
  );
}

function App() {
  return (
    <GlobalProvider>
      <Router>
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
