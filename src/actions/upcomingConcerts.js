import { baseUrl } from '../config/baseUrl';

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

    return fetch(`${baseUrl}/api/v1/get_upcoming_concerts`, configurationObject)
      .then(r => r.json())
      .then(concerts => {
        dispatch(setConcerts(concerts.data))
      })
      .catch(error => console.log(error))
  }
}

export const getConcertsFromSongkick = () => {
  return dispatch => {
    const configurationObject = {
      // sends cookies back
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    return fetch(`${baseUrl}/api/v1/get_concert_data`, configurationObject)
      .then(r => r.json())
      .then(concerts => {
        if (concerts.error) {
          console.log(concerts.error)
        } else {
          dispatch(setConcerts(concerts.data))
        }
      })
      .catch(error => console.log(error))
  }
}
