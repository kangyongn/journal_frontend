import React, {Component} from 'react';
import {connect} from 'react-redux';

import {postJournal} from '../adapter/JournalAdapter.js'

class New extends Component {
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
    const journal = {user_id: this.props.id, ...this.state}
    this.props.postJournal(journal)
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

const mapStateToProps = state => {
  return {
    id: state.user.id
  }
}

export default connect(mapStateToProps, {postJournal})(New)
