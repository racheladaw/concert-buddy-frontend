import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersOfConcert } from '../actions/concertStats.js';

const ConcertStats = ( props ) => {
  const { artist_name, date, price_range, location_json } = props.location.state.concertData
  const concertId = props.match.params.id

//empty array as second argument will only call useEffect on first render
  useEffect(() => {
    console.log("useEffect called")
    props.getUsersOfConcert(concertId)
  }, [])

  const renderUsernames = () => {
    if (props.users) {
      return props.users.map(user => {
        return <li>{user.attributes.username}</li>
      })
    }
  }

  const renderPrice = () => {
    if (price_range !== "-") {
      return <h3>${price_range}</h3>
    } else {
      return <h3>Price Unknown</h3>
    }
  }

  return (
    <div className="ConcertStats">
      {console.log("props.users", props.users)}
      <h1>{artist_name}</h1>
      <h3>{location_json.city}, {location_json.state}</h3>
      <h3>{date}</h3>
      {renderPrice()}
      <p>Users that have saved this concert:</p>
      <ul className="UsernameListConcertStats">
        {renderUsernames()}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.concertStats.users
  }
}

export default connect(mapStateToProps, { getUsersOfConcert })(ConcertStats);
