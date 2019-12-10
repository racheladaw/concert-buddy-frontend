import React from 'react';
import { connect } from 'react-redux';
import { getUpcomingConcerts } from '../actions/upcomingConcerts.js';

class UpcomingConcerts extends React.Component {

  componentDidMount() {
    this.props.getUpcomingConcerts()
  }

  render() {
    return (
      <div className="UpcomingConcerts">
        <h1>UpcomingConcerts</h1>
      </div>
    )
  }
}

export default connect(null, { getUpcomingConcerts })(UpcomingConcerts);
