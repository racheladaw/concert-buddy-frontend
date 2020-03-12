import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveConcert } from '../actions/savedConcerts.js';


class ConcertCard extends React.Component {

  renderButton = () => {
    if (!this.props.saved_concert) {
      return <button onClick={() => this.props.saveConcert(this.props.concert.id, this.props.currentUserId)}>Save This Concert</button>
    }
  }

  render() {
    return (
        <div className="ConcertCard">
          <h4>{this.props.concert.attributes.artist_name}</h4>
          <p>{this.props.concert.attributes.date}</p>
          <p>${this.props.concert.attributes.price_range}</p>
          <p>{this.props.concert.attributes.location_json.city}, {this.props.concert.attributes.location_json.state}</p>
          <Link
            to={{
                pathname: `/home/concert/${this.props.concert.id}/stats`,
                state: {
                  concertData: this.props.concert.attributes
                }
              }}>More Information</Link>
          {this.renderButton()}
        </div>
    )
  }
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
