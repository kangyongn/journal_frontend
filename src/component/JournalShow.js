import React, {Component} from 'react';
import {connect} from 'react-redux';

import JournalEdit from './JournalEdit.js';

class JournalShow extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.journal.content}</p>
        <JournalEdit journal={this.props.journal}/>
      </React.Fragment>
    )
  }
}

export default connect()(JournalShow)
