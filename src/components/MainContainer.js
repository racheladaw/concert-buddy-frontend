import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';
import SavedConcerts from './SavedConcerts';
import NavBar from './NavBar';
import ConcertStats from './ConcertStats'
import Footer from './Footer';
import Profile from './Profile';
import UserProfile from './UserProfile';
import { Route } from 'react-router-dom';


const MainContainer = () => {
    return (
      <div className="MainContainer">
        <NavBar />

        <Route exact path="/home" component={UpcomingConcerts} />
        <Route exact path='/home/upcoming_concerts' component={UpcomingConcerts}/>
        <Route exact path='/home/saved_concerts' component={SavedConcerts} />
        <Route exact path='/home/profile' component={Profile} />
        <Route path="/home/concert/:id/stats" component={ConcertStats} />
        <Route path="/home/user/:id" component={UserProfile} />
        <Footer />
      </div>
    )
}

export default MainContainer;
