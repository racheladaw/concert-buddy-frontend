import React from 'react';
import { connect } from 'react-redux';
import { getUpcomingConcerts } from '../actions/upcomingConcerts.js';
import ConcertCard from './ConcertCard';

class UpcomingConcerts extends React.Component {

  componentDidMount() {
    this.props.getUpcomingConcerts()
  }

  renderConcertCard() {
    return this.props.concerts.map(concert_data => {
      return <ConcertCard key={concert_data.id} concert={concert_data} />
    })
  }

  render() {
    return (
      <div className="UpcomingConcerts">
        <h1>UpcomingConcerts</h1>
        {this.renderConcertCard()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.upcomingConcerts
  }
}

export default connect(mapStateToProps, { getUpcomingConcerts })(UpcomingConcerts);
