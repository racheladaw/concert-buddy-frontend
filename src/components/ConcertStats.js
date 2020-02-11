import React from 'react';

const ConcertStats = ( props ) => {
  const { artist_name, date, price_range, location_json } = props.location.state.concertData
  return (
    <div>
    {console.log(props)}
      <p>Stats</p>
      <h1>{artist_name}</h1>
      <h3>{date}</h3>
      <h3>${price_range}</h3>
    </div>
  )
}

export default ConcertStats;
