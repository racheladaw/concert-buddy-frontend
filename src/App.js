import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }


  render() {
    let navbar

    if (this.props.currentUser) {
      navbar = <NavBar />;
    }

    return (
      <div className="App">
        {navbar}
        <MainContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
