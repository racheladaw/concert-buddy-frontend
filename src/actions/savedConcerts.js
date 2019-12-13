export const addConcert = saved_concert => {
  return {
    type: "ADD_SAVED_CONCERT",
    concert_id: saved_concert.concert_id
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

    return fetch("http://localhost:3001/api/v1/save_concert", configurationObject)
      .then(r => r.json())
      .then(saved_concert => {
        if (saved_concert.error) {
          alert(saved_concert.error)
        } else {
          console.log(saved_concert)
          alert("Concert Saved")
          // need to add to saved concerts redux store
          dispatch(addConcert(saved_concert))
          // routeHistory.push('/')
        }
      })
      .catch(error => console.log(error))
  }
}
