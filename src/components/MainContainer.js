import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';
import SavedConcerts from './SavedConcerts';
import NavBar from './NavBar';
import { Route } from 'react-router-dom';


const MainContainer = () => {
    return (
      <div className="MainContainer">
        <NavBar />
        <Route exact path="/home" component={UpcomingConcerts} />
        <Route exact path='/home/upcoming_concerts' component={UpcomingConcerts}/>
        <Route exact path='/home/saved_concerts' component={SavedConcerts} />
      </div>
    )
}

export default MainContainer;
