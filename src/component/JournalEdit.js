import React, {Component} from 'react';
import {connect} from 'react-redux';

import {patchJournal} from '../adapter/JournalAdapter.js';

class JournalEdit extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let content = this.props.journal.content + this.state.content
    this.props.patchJournal(this.props.journal.id, content)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='content' placeholder='content' value={this.state.content} onChange={this.handleChange}/>
        <button>submit</button>
      </form>
    )
  }
}

export default connect(null, {patchJournal})(JournalEdit);
