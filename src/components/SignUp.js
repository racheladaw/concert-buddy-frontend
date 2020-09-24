import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/currentUser.js';

const usStates = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

const canadaProvinces = ['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon Territory']

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      location: {
        city: "",
        state: "",
        country: "usa"
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
    this.props.signUp(this.state, this.props.history)
  }

  renderStateOptions = () => {
    if (this.state.location.country === "usa") {
      return usStates.map(usState => {
        return <option value={usState}>{usState}</option>
      })
    } else {
      return canadaProvinces.map(province => {
        return <option value={province}>{province}</option>
      })
    }
  }

  render() {
    return (
      <div className="SignUp">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <label id="country-label">
            Country:
            <select id="country-dropdown" name="country" value={this.state.location.country} onChange={this.handleChange}>
              <option value="usa">USA</option>
              <option value="canada">CA</option>
            </select>
          </label>
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
          <label id="state-label">
            State/Province:
            <select id="state-dropdown" name="state" value={this.state.location.state} onChange={this.handleChange}>
              {this.renderStateOptions()}
            </select>
          </label>
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
            value="Sign Up"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp })(SignUp);
