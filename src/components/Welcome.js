import React from 'react';
import Logo from './Logo';
import Login from './Login'
import SignUp from './SignUp'
import { Switch, Route, Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="Welcome">
      <h4>Welcome to Concert Buddy</h4>
      <Link to='/login' className="welcome-link">Login</Link><br/>
      <Link to='/signup' className="welcome-link">Sign Up</Link>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp} />
      </Switch>
      <Logo />
    </div>
  )
}

export default Welcome;
