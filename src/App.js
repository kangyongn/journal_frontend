import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCurrentUser} from './adapter/UserAdapter.js';
import {removeUserFromState} from './action/UserAction.js';

import {removeJournalsFromState} from './action/JournalAction.js';

import Login from './component/Login.js';
import Signup from './component/Signup.js';
import JournalNew from './component/JournalNew.js';
import Journal from './container/Journal.js';

class App extends Component {
  render() {
    return (
      this.props.token ?
      <React.Fragment>
        <JournalNew/>
        <Journal/>
        <button onClick={(e) => {this.props.removeUserFromState(); this.props.removeJournalsFromState()}}>exit</button>
      </React.Fragment>
      :
      <React.Fragment>
        <Login/>
        <Signup/>
      </React.Fragment>
    )
  }

  componentDidMount() {
    if(localStorage.getItem('jwt')) {
      this.props.getCurrentUser()
    }
  }
}


const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps, {getCurrentUser, removeUserFromState, removeJournalsFromState})(App);
