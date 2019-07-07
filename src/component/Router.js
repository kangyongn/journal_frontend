import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login.js';
import Signup from './Signup.js';
import JournalNew from './JournalNew.js';

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/new-journal' component={JournalNew}/>
    </Switch>
  )
}

export default Router
