import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import blankProfilePicture from '../images/Portrait_Placeholder.png';
import { getUsersProfile } from '../actions/users.js';

const UserProfile = ( props ) => {

  useEffect(() => {
    props.getUsersProfile(props.match.params.id)
  }, [])

  const renderProfilePicture = () => {
    if (props.profilePicture) {
      return <img className="profilePicture" alt="Profile picture" src={props.profilePicture}></img>
    } else {
      return <img className="profilePicture" src={blankProfilePicture} alt="Blank profile avatar"></img>
    }
  }

  return (
    <div className="Profile">
      <h1>{props.name}</h1>
      {renderProfilePicture()}
      <h5>{props.location}</h5>
      <h5>Username: {props.userName}</h5>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.users.user.username,
    name: state.users.user.name,
    location: state.users.user.location,
    profilePicture: state.users.user.profilePicture
  }
}

export default connect(mapStateToProps, { getUsersProfile })(UserProfile);
