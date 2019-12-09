import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

const NavBar = (props) => {
  return (
    <div className="NavBar">
      { props.currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
