import { baseUrl } from '../config/baseUrl';

export const setUserProfileInfo = user => {
  return {
    type: "SET_USER",
    name: user.attributes.name,
    username: user.attributes.username,
    profilePicture: user.attributes.profile_picture.image_url,
    location: user.attributes.location_json.city + ", " + user.attributes.location_json.state
  }
}


// async action creators
export const getUsersProfile = (userId) => {
  console.log(userId)
  return dispatch => {
    const configurationObject = {
      // sends cookies back
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(`${baseUrl}/api/v1/users/${userId}`, configurationObject)
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          // routeHistory.push('/home')
          dispatch(setUserProfileInfo(user.data))
          console.log(user)
        }
      })
      .catch(error => console.log(error))
  }
}
