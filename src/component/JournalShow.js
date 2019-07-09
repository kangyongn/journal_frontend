import React, {Component} from 'react';
import {connect} from 'react-redux';

import JournalEdit from './JournalEdit.js';

class JournalShow extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.journal.created_at.slice(0,10)}</h1>
        <p>{this.props.journal.content}</p>
        <JournalEdit journal={this.props.journal}/>
      </React.Fragment>
    )
  }
}

export default connect()(JournalShow)
