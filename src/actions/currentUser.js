export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  }
}



//async action creators
export const login = credentials => {
  console.log(credentials)
  return dispatch => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    }
    return fetch("http://localhost:3001/api/v1/login", configurationObject)
  }
}
