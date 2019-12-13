
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
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response)
          alert("Concert Saved")
          // need to add to saved concerts redux store
          // dispatch()
          // routeHistory.push('/')
        }
      })
      .catch(error => console.log(error))
  }
}
