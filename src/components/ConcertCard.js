import React from 'react';
import { connect } from 'react-redux';
import { saveConcert } from '../actions/savedConcerts.js';

// params are destructured as they are passed as argument
const ConcertCard = ({ concert, saveConcert, currentUserId }) => {

  return (
    <div className="ConcertCard">
      <h4>{concert.attributes.artist_name}</h4>
      <p>{formatDate(concert.attributes.date)}</p>
      <p>${concert.attributes.price_range}</p>
      <p>{concert.attributes.location_json.city}, {concert.attributes.location_json.state}</p>
      <button onClick={() => saveConcert(concert.id, currentUserId)}>Save This Concert</button>
    </div>
  )
}

const formatDate = date => {
  const formatted_date = new Date(date).toDateString();
  return formatted_date.substring(0, 10) + ',' + formatted_date.substring(10)
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUser.id
  }
}

export default connect(mapStateToProps, { saveConcert })(ConcertCard);
