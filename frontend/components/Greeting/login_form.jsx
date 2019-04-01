import React from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer/footer";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: this.props.email,
          password: "" 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
        <Redirect to="/" />
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render () {
      return (
      <div>
        <div id="main-login-body">
          <div><i className=" default-user-icon far fa-user fa-3x"></i></div>
          {/* <div><FontAwesomeIcon className="default-user-icon" icon={faUser} /></div> */}
          <h1 className="greeting-heading" >Welcome back</h1>
          <p className="greeting-subtext" >Please enter your password to log in</p>
          <form id="signin-form" onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              <input className="greeting-form-input" 
                placeholder="Email address"
                type="text" 
                value={this.state.email} 
                onChange={this.update('email')}
                id="email" /> 
            </label>
            <br/>
            <label htmlFor="password">
              <input className="greeting-form-input" 
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')} 
                id="password" />
            </label>
            <br/>
            <input className="greeting-submit-button" type="Submit" value="Log In" readOnly/>
            <p id="forgot-password" >Forgot password</p>
        </form>
        </div>
        <Footer />
      </div >
    )
  }
}

export default LoginForm;