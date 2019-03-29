import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      first_name: "",
      lst_name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:
              <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              id="email" />
          </label>
          <br />
          <label htmlFor="first name">First name:
              <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              id="first name" />
          </label>
          <br />
          <label htmlFor="last name">Last name:
              <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              id="last name" />
          </label>
          <br />
          <label htmlFor="password">Password:
              <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              id="password" />
          </label>
          <br />
          <input type="Submit" value="Sign Up" readOnly />
        </form>
      </div>
    )
  }
}

export default SignupForm;