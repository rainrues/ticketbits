import React from 'react';

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
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email:
              <input type="text" 
                value={this.state.email} 
                onChange={this.update('email')}
                id="email" /> 
            </label>
            <br/>
            <label htmlFor="password">Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')} 
                id="password" />
            </label>
            <br/>
            <input type="Submit" value="Login" readOnly/>
        </form>
      </div>
    )
  }
}

export default LoginForm;