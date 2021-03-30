import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
