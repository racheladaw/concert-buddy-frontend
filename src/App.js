import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Welcome from './components/Welcome';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }


  render() {
    return (
      <div className="App">
        <Switch>
          {
            this.props.loggedIn &&
            <Route path="/home" component={MainContainer} />
          }
          <Route path="/" component={Welcome} />
        </Switch>
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
