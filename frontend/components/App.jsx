import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <h1>Ticket Bits</h1>
      <GreetingContainer />
    </header>
    {/* <Switch> */}
      {/* COMPONENTS GO HERE. MAKE SURE TO IMPORT FIRST */}
      {/* <Route exact path="/" component={PostIndexContainer} />
      <Route exact path="/posts/:postId" component={PostShowContainer} />
      <Route path="/posts/:postId/edit" component={EditPostFormContainer} /> */}
    {/* </Switch> */}
  </div>
);

export default App;