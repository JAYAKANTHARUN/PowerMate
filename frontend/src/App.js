import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Usage from './Usage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/l">
              <Login />
            </Route>
            <Route exact path="/usage">
              <Usage />
              </Route>
            
            
            
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;