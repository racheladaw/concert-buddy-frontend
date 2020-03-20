import React from 'react';
import { connect } from 'react-redux';

const Profile = ( props ) => {

  return (
    <div className="Profile">
      <h1>My Profile</h1>
      <h5>{props.name}</h5>
      <h5>{props.city}, {props.stateName}</h5>
      <h5>Username: {props.userName}</h5>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.currentUser.attributes.username,
    name: state.currentUser.attributes.name,
    city: state.currentUser.attributes.location_json.city,
    stateName: state.currentUser.attributes.location_json.state
  }
}

export default connect(mapStateToProps)(Profile);
