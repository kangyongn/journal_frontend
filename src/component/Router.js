import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login.js';
import Signup from './Signup.js';
import Journal from '../container/Journal.js';
import JournalNew from './JournalNew.js';

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/journal' component={Journal}/>
      <Route path='/new' component={JournalNew}/>
      <Route path='/show' />
    </Switch>
  )
}

export default Router
