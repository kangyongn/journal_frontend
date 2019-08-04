import React, {Component} from 'react';
import {connect} from 'react-redux';

import JournalEdit from './JournalEdit.js';

class JournalShow extends Component {
  state = {
    edit: false
  }

  handleClick = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.journal.created_at.slice(0,10)}</h1>
        <p>{this.props.journal.content}</p>
        {this.state.edit ? <JournalEdit journal={this.props.journal} handleClick={this.handleClick}/> : <button onClick={this.handleClick}>edit</button>}
      </React.Fragment>
    )
  }
}

export default connect()(JournalShow)
