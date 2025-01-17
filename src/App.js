import './App.css';
import Header from './Header/Header'
import Login from './Login/Login'
import Home from './Home/Home'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
