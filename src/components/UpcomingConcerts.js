import React from 'react';
import { connect } from 'react-redux';
import { getUpcomingConcerts } from '../actions/upcomingConcerts.js';
import ConcertCard from './ConcertCard';

class UpcomingConcerts extends React.Component {

  componentDidMount() {
    this.props.getUpcomingConcerts()
  }

  renderConcertCard() {
    if (this.props.concerts.length > 0) {
      return this.props.concerts.map(concert_data => {
        return <ConcertCard key={concert_data.id} concert={concert_data} />
      })
    } else {
      return <p className="error">Unable to Load Concert Data at This Time</p>
    }
  }

  render() {
    return (
      <div className="UpcomingConcerts">
        <h1>Upcoming Concerts in {this.props.currentUserCity}</h1>
        <div className="card-container">
          {this.renderConcertCard()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.upcomingConcerts,
    currentUserCity: state.currentUser.attributes.location_json.city
  }
}

export default connect(mapStateToProps, { getUpcomingConcerts })(UpcomingConcerts);
