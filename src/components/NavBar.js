import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';
import profileIcon from '../images/profile_icon.png';

const NavBar = ({ currentUserName }) => {
  return (
    <ul className="NavBar">
      <li><NavLink to='/home/upcoming_concerts' activeClassName="active" className="concerts-link">Upcoming Concerts</NavLink><br/></li>
      <li><NavLink to='/home/saved_concerts' activeClassName="active" className="concerts-link">Saved Concerts</NavLink></li>
      <li><Logout /></li>
      <li id="profileIconList"><NavLink to='/home/profile' activeClassName="active" className="profile-link"><img id="profileIcon" src={profileIcon} alt="person icon with headphones"></img></NavLink></li>
      <li id="welcome-user">Welcome, {currentUserName}</li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    currentUserName: state.currentUser.attributes.name,
    currentUserUsername: state.currentUser.attributes.username
  }
}

export default connect(mapStateToProps)(NavBar);
