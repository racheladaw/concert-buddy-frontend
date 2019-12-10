export const setConcerts = data => {
  return {
    type: "SET_UPCOMING_CONCERTS",
    concerts: data
  }
}

//async action creators
export const getUpcomingConcerts = () => {
  return dispatch => {
    const configurationObject = {
      // sends cookies back
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    return fetch("http://localhost:3001/api/v1/get_upcoming_concerts", configurationObject)
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          console.log(data)
          // dispatch(setConcerts(data))
        }
      })
      .catch(error => console.log(error))
  }
}
