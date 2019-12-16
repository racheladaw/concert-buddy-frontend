import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';
import SavedConcerts from './SavedConcerts';
import { Switch, Route, Link } from 'react-router-dom';


const MainContainer = () => {
    return (
      <div className="MainContainer">
        <Switch>
          <Route exact path="/" component={UpcomingConcerts} />
          <Route exact path='/upcoming_concerts' component={UpcomingConcerts}/>
          <Route exact path='/saved_concerts' component={SavedConcerts} />
        </Switch>
      </div>
    )
}

export default MainContainer;
