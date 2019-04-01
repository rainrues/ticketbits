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
        <h2>Let's get started</h2>
        <p>Use facebook or email to get started.</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:
            <input type="text"
                value={this.state.email}
                onChange={this.update()}
                id="email" />
            </label>
          <br/>
          <input type="Submit" value="Get Started" readOnly />
        </form>
      </div>
    )
  }
}

export default EntryForm;
