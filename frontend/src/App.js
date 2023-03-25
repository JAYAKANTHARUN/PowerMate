import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Home from './Home';
import Login from './Login';
import Usage from './Usage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


localStorage.setItem('username','' );

function App() {const lis=localStorage.getItem('lis' );
console.log(lis);
  return (
    <Router>
      
     
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
      
    </Router>
  );
}

export default App;