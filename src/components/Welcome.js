import React from 'react';
import Logo from './Logo';
import Login from './Login'
import SignUp from './SignUp'
import { Route, Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="welcome-text">
        <h4>Concert Buddy</h4>
        <Link to='/login' className="welcome-link">Login</Link>
        <Link to='/signup' className="welcome-link">Sign Up</Link>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp} />
      </div>
      <Logo />
    </div>
  )
}

export default Welcome;
