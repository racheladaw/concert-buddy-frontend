import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';
import Logo from './Logo';
import Login from './Login'
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        {this.props.currentUser ? (
          <UpcomingConcerts />
        ) : (
          <div className="LoggedOutScreen">
            <Logo />
            <button>Login</button>
            <p>OR</p>
            <button>Sign Up</button>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp} />
          </div>
       )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MainContainer);
