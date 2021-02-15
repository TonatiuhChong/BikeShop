import {useEffect} from 'react'
import './App.css';
import Header from './Header/Header'
import Login from './Login/Login'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Footer from './components/Footer/Footer'
import Navlinks from './components/navlinks/navlinks'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {FormatBoldRounded} from '@material-ui/icons'

function App() {
  const [{loggedInUser},dispatch]= useStateValue();
  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch({
            type:'SET_LOGIN',
            loggedInUser:userAuth
        })
      }else{
        dispatch({
          type:'SET_LOGIN',
          loggedInUser:null
      })
      }
    })
    return()=>{
      unsubscribe();
    }
  })
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
        <Navlinks/>
        <Home/>
        <Footer/>
        </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
