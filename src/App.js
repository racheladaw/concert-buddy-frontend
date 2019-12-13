import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Welcome from './components/Welcome';
import { Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }


  render() {
    let navbar
    let main
    let welcome

    if (this.props.loggedIn) {
      navbar = <NavBar />
      main = <MainContainer />
    } else {
      welcome = <Welcome />
    }

    return (
      <div className="App">
        {navbar}
        {main}
        {welcome}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
