import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from "../Footer/footer";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      first_name: "",
      lst_name: "",
      password: "",
      errors: this.props.errors 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
    <Redirect to="/" />
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
    <div>
      <div id="main-signup-body" >
        <div><i className=" default-user-icon far fa-user fa-3x"></i></div>
        <h1 className="greeting-heading" >Welcome</h1>
        <p className="greeting-subtext" >Create an account.</p>
        <form id="signup-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">
              <input className="greeting-form-input" 
              placeholder="Email address"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              id="email" />
          </label>
          <div id="middle-line-signup" >
            <label htmlFor="first name">
                <input className="greeting-form-middle-input" 
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                id="first name" />
            </label>
            <label htmlFor="last name">
                <input className="greeting-form-middle-input" 
                placeholder="Last Name"
                type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                id="last name" />
            </label>
          </div>
          <label htmlFor="password">
              <input className="greeting-form-input" 
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              id="password" />
          </label>
          <div className="errors">
            {this.props.errors}
          </div>
          <input className="greeting-submit-button" type="Submit" value="Sign Up" readOnly />
        </form>
        </div>
        <Footer />
      </div >
    )
  }
}

export default SignupForm;