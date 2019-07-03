import React, {Component} from 'react';

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
    console.log('submit')
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

export default Login
