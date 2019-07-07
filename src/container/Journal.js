import React from 'react';
import {connect} from 'react-redux';

const Journal = props => {
  return (
    <h1>{props.all.length}</h1>
  )
}

const mapStateToProps = state => {
  return {
    all: state.journal.all
  }
}

export default connect(mapStateToProps)(Journal)
