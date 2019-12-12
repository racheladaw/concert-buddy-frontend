import React from 'react';
import Logo from './Logo';
import Login from './Login'
import SignUp from './SignUp'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="Welcome">
      <Logo />
      <h4>Welcome to Concert Buddy</h4>
      <Link to='/login'>Login</Link><br/>
      <Link to='/signup'>Sign Up</Link>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </div>
  )
}

export default Welcome;
