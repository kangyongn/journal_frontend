import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {postJournal} from '../adapter/JournalAdapter.js'

class JournalNew extends Component {
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
    this.props.history.push('/journal')
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

export default withRouter(connect(mapStateToProps, {postJournal})(JournalNew))
