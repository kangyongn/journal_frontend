import React, {Component} from 'react';

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
    console.log('submit')
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

export default Signup
