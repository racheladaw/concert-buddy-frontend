import React from 'react';
import { connect } from 'react-redux';
import blankProfilePicture from '../images/Portrait_Placeholder.png';

const Profile = ( props ) => {

  const renderProfilePicture = () => {
    if (props.profilePicture) {
      return <img alt="Profile picture"></img>
    } else {
      return <img id="blankProfilePicture" src={blankProfilePicture} alt="Blank profile avatar"></img>
    }
  }

  return (
    <div className="Profile">
      <h1>My Profile</h1>
      {renderProfilePicture()}
      <h5>{props.name}</h5>
      <h5>{props.city}, {props.stateName}</h5>
      <h5>Username: {props.userName}</h5>

      <button>Upload a Profile Picture</button>
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
