import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import GreetingContainer from './Greeting/greeting_container';
import EntryContainer from './Greeting/entry_container';
import LoginFormContainer from './Greeting/login_form_container';
import SignupFormContainer from './Greeting/signup_form_container';
import NavBar from './Navbar/navbar_container';

const App = () => (
  <div>
    <header>
      <NavBar /> 
      {/* <GreetingContainer /> */}
    </header>

    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute exact path="/getStarted" component={EntryContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    {/* <Switch> */}
      {/* COMPONENTS GO HERE. MAKE SURE TO IMPORT FIRST */}
      {/* <Route exact path="/" component={PostIndexContainer} />
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route path="/posts/:postId/edit" component={EditPostFormContainer} /> */}
    {/* </Switch> */}
  </div>
);

export default App;