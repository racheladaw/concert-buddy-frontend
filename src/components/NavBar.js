import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul className="NavBar">
      <li><NavLink to='/upcoming_concerts' activeClassName="active" className="concerts-link">Upcoming Concerts</NavLink><br/></li>
      <li><NavLink to='/saved_concerts' activeClassName="active" className="concerts-link">Saved Concerts</NavLink></li>
      <li><Logout /></li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
