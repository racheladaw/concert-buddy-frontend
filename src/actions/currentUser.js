export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const removeCurrentUser = () => {
  return {
    type: "REMOVE_CURRENT_USER"
  }
}



//async action creators
export const login = credentials => {
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
          dispatch(setCurrentUser(user.data))
        }
      })
      .catch(error => console.log(error))
  }
}

export const signUp = credentials => {
  return dispatch => {
    const signupInfo = {
      user: credentials
    }
    const configurationObject = {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupInfo)
    }

    return fetch("http://localhost:3001/api/v1/signup", configurationObject)
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data))
        }
      })
      .catch(error => console.log(error))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    const configurationObject = {
      // sends cookies back
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
          dispatch(setCurrentUser(user.data))
        }
      })
      .catch(error => console.log(error))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(removeCurrentUser())
    const configurationObject = {
      credentials: "include",
      method: "DELETE"
    }

    return fetch("http://localhost:3001/api/v1/logout", configurationObject)
  }
}
