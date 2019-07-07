import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCurrentUser} from './adapter/UserAdapter.js';

import Router from './component/Router.js';
import NavBar from './component/NavBar.js';
import Journal from './container/Journal.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Router/>
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

export default connect(mapStateToProps, {getCurrentUser})(App);
