import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import Home from './containers/Home';
import Explore from './containers/explore/Explore';
import Data from './containers/Data';
import Team from './containers/Team';
import NavBar from './components/NavBar';

function App() {

  return (
    <Router>
      <NavBar />
      <>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/explore' exact>
              <Explore />
            </Route>
            <Route path='/data' exact>
              <Data />
            </Route>
            <Route path='/team' exact>
              <Team />
            </Route>
          </Switch>
      </>
    </Router>
  );
}

export default App;
