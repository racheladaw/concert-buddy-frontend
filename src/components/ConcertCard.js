import React from 'react';

// params are destructured as they are passed as argument
const ConcertCard = ({ concert }) => {

  return (
    <div className="ConcertCard">
      <ul>
        <h4>{concert.attributes.artist_name}</h4>
        <li>{formatDate(concert.attributes.date)}</li>
        <li>${concert.attributes.price_range}</li>
        <li>{concert.attributes.location_json.city}, {concert.attributes.location_json.state}</li>
      </ul>
    </div>
  )
}

const formatDate = date => {
  const formatted_date = new Date(date).toDateString();
  return formatted_date.substring(0, 10) + ',' + formatted_date.substring(10)
}

export default ConcertCard;
