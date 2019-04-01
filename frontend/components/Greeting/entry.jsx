import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", entryCheck: true };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.check_email(this.state).then(() => this.setState({entryCheck: false}));
  }
  

  update() {
    return (e) => this.setState({ email: e.target.value });
  }

  render() {
    if (this.state.entryCheck === false) {
      if (this.props.match) {
        return <Redirect to="/login" />
      } else {
        return <Redirect to="/signup" />
      }
    }

    return (
      <div className="entry-main-block">
        <h1 id="entry-page-logo" >e</h1>
        <h2 className="greeting-heading" >Let's get started</h2>
        <p className="greeting-subtext" >Use Facebook or email to get started.</p>
        <form id="entry-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <input className="greeting-form-input" 
                placeholder="Email address"
                type="text"
                value={this.state.email}
                onChange={this.update()}
                id="email" />
            </label>
          <input className="greeting-submit-button" type="Submit" value="Get Started" readOnly />
          <p id="entry-connector" >or</p>
          <input className="greeting-submit-button" id="facebook-submit" type="Submit" value="Continue with Facebook" readOnly />
          <p className="entry-subtext" >By continuing, I accept the Eventbrite terms of service, community guidelines and have read the privacy policy.</p>
        </form>
      </div>
    )
  }
}

export default EntryForm;
