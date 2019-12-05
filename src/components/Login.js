import React from 'react';

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

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          name="username"
          type="text"
          placeholder="Username"
          value={this.state.username}
        /><br/>
        <input
          onChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
        /><br/>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    )
  }
}

export default Login;
