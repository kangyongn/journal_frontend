import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {postSignup} from '../adapter/UserAdapter.js'

class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postSignup(this.state)
    this.props.history.push('/journal')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
        <input type='password' name='password_confirmation' placeholder='password confirmation' value={this.state.password_confirmation} onChange={this.handleChange}/>
        <button>submit</button>
      </form>
    )
  }
}

export default withRouter(connect(null, {postSignup})(Signup))
