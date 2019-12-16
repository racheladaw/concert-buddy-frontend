import React from 'react';
import { connect } from 'react-redux';
import { getSavedConcerts } from '../actions/savedConcerts.js';
import ConcertCard from './ConcertCard';

class SavedConcerts extends React.Component {

  componentDidMount() {
    this.props.getSavedConcerts()
  }

  renderConcertCard() {
    return this.props.concerts.map(concert_data => {
      return <ConcertCard key={concert_data.id} concert={concert_data} />
    })
  }

  render() {
    return (
      <div className="SavedConcerts">
        <h1>Your Saved Concerts</h1>
        {this.renderConcertCard()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.savedConcerts
  }
}

export default connect(mapStateToProps, { getSavedConcerts })(SavedConcerts);
