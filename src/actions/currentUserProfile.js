import { baseUrl } from '../config/baseUrl';

export const setFormStateToActive = () => {
  return {
    type: "SHOW_FORM"
  }
}

export const setFormStateToInactive = () => {
  return {
    type: "HIDE_FORM"
  }
}

export const setProfilePicture = (picture) => {
  return {
    type: "SET_PROFILE_PICTURE",
    picture
  }
}

export const uploadProfilePicture = (formData, userId) => {
  console.log("hit action creator", userId)
  return dispatch => {
    const configurationObject = {
      credentials: "include",
      method: "POST",
      body: formData
    }

    return fetch(`${baseUrl}/api/v1/users/${userId}/upload_photo`, configurationObject)
      .then(r => r.json())
      .then(photo => {
        if (photo.error) {
          alert(photo.error)
        } else {
          console.log("success", photo)
          dispatch(setProfilePicture(photo.profile_picture))
          dispatch(setFormStateToInactive())
        }
      })
      .catch(error => console.log(error))
  }
}
