import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import { createContext, useState } from 'react';
export const VnetworkContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  return (
    <VnetworkContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </VnetworkContext.Provider>
  );
}

export default App;
