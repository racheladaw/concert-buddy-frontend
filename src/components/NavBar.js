import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <Logout />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
