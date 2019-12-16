import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <Logout />
      <Link to='/upcoming_concerts' className="concerts-link">Upcoming Concerts</Link><br/>
      <Link to='/saved_concerts' className="concerts-link">Saved Concerts</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
