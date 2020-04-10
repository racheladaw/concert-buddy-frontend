import React from 'react';
import { connect } from 'react-redux';
import blankProfilePicture from '../images/Portrait_Placeholder.png';
import { setFormStateToActive } from '../actions/currentUserProfile.js';
import { uploadProfilePicture } from '../actions/currentUser.js';

const Profile = ( props ) => {

  const renderProfilePicture = () => {
    if (props.profilePicture) {
      return <img className="profilePicture" alt="Profile picture" src={props.profilePicture}></img>
    } else {
      return <img className="profilePicture" src={blankProfilePicture} alt="Blank profile avatar"></img>
    }
  }

  const submitPhoto = (event) => {
    event.preventDefault();
    let photoInput = document.getElementById('profile-photo-input');
    if (photoInput.files[0]) {
      const formData = new FormData();
      const upload_file = photoInput.files[0]
      formData.append('profile_picture', upload_file);
      props.submitProfilePhoto(formData, props.userId)
    }

  }

  return (
    <div className="Profile">
      <h1>My Profile</h1>
      {renderProfilePicture()}
      <h5>{props.name}</h5>
      <h5>{props.city}, {props.stateName}</h5>
      <h5>Username: {props.userName}</h5>

      <button onClick={props.toggleForm} className={props.buttonStatus === "Active" ? "" : "hidden"}>Change Your Profile Photo</button>

      <form className={props.formStatus === "Active" ? "" : "hidden"} onSubmit={submitPhoto}>
        <input type="file"
          id="profile-photo-input" name="profile_picture"
          accept="image/png, image/jpeg"
        />
        <input
          className="submit-input"
          type="submit"
          value="Upload"
        />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.currentUser.attributes.username,
    userId: state.currentUser.id,
    name: state.currentUser.attributes.name,
    city: state.currentUser.attributes.location_json.city,
    stateName: state.currentUser.attributes.location_json.state,
    buttonStatus: state.currentUserProfile.buttonStatus,
    formStatus: state.currentUserProfile.formStatus,
    profilePicture: state.currentUser.attributes.profile_picture.image_url
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleForm: () => dispatch(setFormStateToActive()),
    submitProfilePhoto: (formData, userId) => dispatch(uploadProfilePicture(formData, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
