import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/currentUser.js';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state)
  }

  render() {
    return (
      <div className="Login">
        <h3>Login to Concert Buddy</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className="text-input"
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
          /><br/>
          <input
            className="text-input"
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
          /><br/>
          <input
            className="submit-input"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    )
  }
}


export default connect(null, { login })(Login);
