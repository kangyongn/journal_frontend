import React, {Component} from 'react';
import {connect} from 'react-redux';

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='email' placeholder='email' onChange={this.handleChange}/>
        <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        <button>submit</button>
      </form>
    )
  }
}

export default connect(null, {postLogin})(Login)
