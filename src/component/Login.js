import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {postLogin} from '../adapter/UserAdapter.js';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postLogin(this.state)
    this.props.history.push('/journal')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
        <button>submit</button>
      </form>
    )
  }
}

export default withRouter(connect(null, {postLogin})(Login))
