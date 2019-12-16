import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/currentUser.js';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      location: {
        city: "",
        state: "",
        country: ""
      },
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    if (['city', 'state', 'country'].indexOf(event.target.name) >= 0) {
      this.setState({
        ...this.state,
        location: {
          ...this.state.location,
          [event.target.name]: event.target.value
        }
      })
    } else {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state)
  }

  render() {
    return (
      <div className="SignUp">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className="text-input"
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
          /><br/>
          <input
            className="text-input"
            onChange={this.handleChange}
            name="city"
            type="text"
            placeholder="City"
            value={this.state.location.city}
          /><br/>
          <input
            className="text-input"
            onChange={this.handleChange}
            name="state"
            type="text"
            placeholder="State"
            value={this.state.location.state}
          /><br/>
          <input
            className="text-input"
            onChange={this.handleChange}
            name="country"
            type="text"
            placeholder="Country (Concert data only available for the US and Canada at this time)"
            value={this.state.location.country}
          /><br/>
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

export default connect(null, { signUp })(SignUp);
