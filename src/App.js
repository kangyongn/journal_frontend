import React, {Component} from 'react';
import {connect} from 'react-redux';

import Login from './component/Login.js';
import Signup from './component/Signup.js';
import JournalNew from './component/JournalNew.js';

class App extends Component {
  render() {
    return (
      this.props.token ?
      <JournalNew/>
      :
      <React.Fragment>
        <Login/>
        <Signup/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(App);
