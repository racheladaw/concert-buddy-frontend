import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';
import SavedConcerts from './SavedConcerts';


const MainContainer = () => {
    return (
      <div className="MainContainer">
          <UpcomingConcerts />
          <SavedConcerts />
      </div>
    )
}

export default MainContainer;
