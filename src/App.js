import './App.css';
import Header from './Header/Header'
import Login from './Login/Login'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Footer from './components/Footer/Footer'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        <Footer/>
        </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
