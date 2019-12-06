import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Login from './components/Login';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }


  render() {
    return (
      <Login />
    );
  }
}

export default connect(null, { getCurrentUser })(App);
