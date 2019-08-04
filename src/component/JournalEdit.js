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
    if(this.state.content) {
      let content = this.props.journal.content + `\n` + this.state.content
      this.props.patchJournal(this.props.journal.id, content)
      this.setState({
        content: ''
      })
    } else {
      alert('empty field')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='content' placeholder='content' value={this.state.content} onChange={this.handleChange}/>
        <button>submit</button>
        <button onClick={this.props.handleClick}>cancel</button>
      </form>
    )
  }
}

export default connect(null, {patchJournal})(JournalEdit);
