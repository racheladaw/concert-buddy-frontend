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
      return <ConcertCard key={concert_data.id} concert={concert_data} saved_concert={true} />
    })
  }

  render() {
    return (
      <div className="SavedConcerts">
        <h1>Your Saved Concerts</h1>
        <div className="card-container">
          {this.renderConcertCard()}
        </div>
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
