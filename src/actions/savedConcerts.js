export const addConcert = data => {
  return {
    type: "ADD_SAVED_CONCERT",
    concert: data
  }
}

export const setSavedConcerts = data => {
  return {
    type: "SET_SAVED_CONCERTS",
    concerts: data
  }
}


//async
export const saveConcert = (concert_id, user_id) => {
  return dispatch => {
    const configurationObject = {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        saved_concert: {
          concert_id,
          user_id
        }
      })
    }

    return fetch("https://concert-buddy.herokuapp.com/api/v1/save_concert", configurationObject)
      .then(r => r.json())
      .then(saved_concert => {
        if (saved_concert.error) {
          alert(saved_concert.error)
        } else {
          console.log(saved_concert)
          alert("Concert Saved")
          dispatch(addConcert(saved_concert.data))
          // routeHistory.push('/')
        }
      })
      .catch(error => console.log(error))
  }
}

export const getSavedConcerts = () => {
  return dispatch => {
    const configurationObject = {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    return fetch("https://concert-buddy.herokuapp.com/api/v1/saved_concerts", configurationObject)
      .then(r => r.json())
      .then(saved_concerts => {
        dispatch(setSavedConcerts(saved_concerts.data))
      })
      .catch(error => console.log(error))
  }
}
