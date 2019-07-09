import React from 'react';
import {connect} from 'react-redux';

import JournalShow from '../component/JournalShow.js';

const Journal = props => {
  const mapJournals = props.all.map(journal => {
    return (
      <JournalShow journal={journal}/>
    )
  })

  return (
    mapJournals
  )
}

const mapStateToProps = state => {
  return {
    all: state.journal.all
  }
}

export default connect(mapStateToProps)(Journal)
