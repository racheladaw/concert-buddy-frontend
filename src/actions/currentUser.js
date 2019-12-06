export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}



//async action creators
export const login = credentials => {
  console.log(credentials)
  return dispatch => {
    const configurationObject = {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    }

    return fetch("http://localhost:3001/api/v1/login", configurationObject)
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      })
      .catch(error => console.log(error))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    const configurationObject = {
      // added to use sessions and cookies
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    return fetch("http://localhost:3001/api/v1/get_current_user", configurationObject)
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      })
      .catch(error => console.log(error))
  }
}
