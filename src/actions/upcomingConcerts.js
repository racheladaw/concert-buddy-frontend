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
      .then(concerts => {
        if (concerts.error) {
          alert(concerts.error)
        } else {
          console.log(concerts)
          dispatch(setConcerts(concerts.data))
        }
      })
      .catch(error => console.log(error))
  }
}
