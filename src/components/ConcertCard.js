import React from 'react';
import { connect } from 'react-redux';
import { saveConcert } from '../actions/savedConcerts.js';

// params are destructured as they are passed as argument
const ConcertCard = ({ concert, saveConcert, currentUserId, saved_concert }) => {

  const renderButton = () => {
    if (!saved_concert) {
      return <button onClick={() => saveConcert(concert.id, currentUserId)}>Save This Concert</button>
    }
  }

  return (
    <div className="ConcertCard">
      <h4>{concert.attributes.artist_name}</h4>
      <p>{concert.attributes.date}</p>
      <p>${concert.attributes.price_range}</p>
      <p>{concert.attributes.location_json.city}, {concert.attributes.location_json.state}</p>
      {renderButton()}
    </div>
  )
}

//this method is changing the date
// const formatDate = date => {
//   const formatted_date = new Date(date).toDateString();
//   return formatted_date.substring(0, 10) + ',' + formatted_date.substring(10)
// }

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUser.id
  }
}

export default connect(mapStateToProps, { saveConcert })(ConcertCard);
