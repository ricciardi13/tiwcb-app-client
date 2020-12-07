import Header from '../src/Header/Header'
import About from '../src/About/About'
import Logout from '../src/Logout/Logout'
import AddChase from '../src/AddChase/AddChase'
import Login from '../src/Login/Login'
import Dashboard from '../src/Dashboard/Dashboard'
import './App.css';
import { Route } from 'react-router-dom';
import SignUp from './SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={About} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />
      <Route path='/add-chase' component={AddChase} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;

