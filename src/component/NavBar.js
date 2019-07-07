import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {removeUserFromState} from '../action/UserAction.js';
import {removeJournalsFromState} from '../action/JournalAction.js';

const NavBar = props => {
  const nav = () => {
    return (
      <React.Fragment>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/signup'>signup</NavLink>
      </React.Fragment>
    )
  }

  const user = () => {
    return (
      <React.Fragment>
        <NavLink to='/new-journal'>new journal</NavLink>
        <NavLink to='/' onClick={(e) => {props.removeUserFromState(); props.removeJournalsFromState()}}>exit</NavLink>
      </React.Fragment>
    )
  }
  return (
    props.token ? user() : nav()
  )
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps, {removeUserFromState, removeJournalsFromState})(NavBar)
