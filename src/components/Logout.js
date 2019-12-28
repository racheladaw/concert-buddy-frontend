import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js';
import { withRouter } from 'react-router';

// params are destructured as they are passed as argument
const Logout = ({ logout, history }) => {
  return (
    <div>
      <form onSubmit={() => logout(history)}>
        <input className="logout-button" type="submit" value="Log Out"/>
      </form>
    </div>
  )
}


export default connect(null, { logout })(withRouter(Logout));
