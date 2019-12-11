import React from 'react';
import UpcomingConcerts from './UpcomingConcerts';
import Logo from './Logo';
import Login from './Login'
import { connect } from 'react-redux';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        {this.props.currentUser ? (
          <UpcomingConcerts />
        ) : (
          <div className="LoggedOutScreen">
            <Logo />
            <Login />
          </div>
       )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MainContainer);
