import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <p>This is the Main Container</p>
        <UpcomingConcerts />
      </div>
    )
  }
}

export default MainContainer;
