import { baseUrl } from '../config/baseUrl';

export const setUsersOfConcert = data => {
  return {
    type: "SET_USERS",
    users: data
  }
}

export const getUsersOfConcert = (concertId) => {
  return dispatch => {
    const configurationObject = {
      // sends cookies back
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(`${baseUrl}/api/v1/concert/${concertId}/users`, configurationObject)
      .then(r => r.json())
      .then(users => {
        if (users.error) {
          alert(users.error)
        } else {
          // routeHistory.push('/home')
          dispatch(setUsersOfConcert(users.data))
        }
      })
      .catch(error => console.log(error))
  }

}
