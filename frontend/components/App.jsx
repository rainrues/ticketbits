import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './Greeting/greeting_container';
import EntryContainer from './Greeting/entry_container';
import LoginFormContainer from './Greeting/login_form_container';
import SignupFormContainer from './Greeting/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Ticket Bits</h1>
      <GreetingContainer />
    </header>

    <Route path="/getStarted" component={EntryContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    {/* <Switch> */}
      {/* COMPONENTS GO HERE. MAKE SURE TO IMPORT FIRST */}
      {/* <Route exact path="/" component={PostIndexContainer} />
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route path="/posts/:postId/edit" component={EditPostFormContainer} /> */}
    {/* </Switch> */}
  </div>
);

export default App;