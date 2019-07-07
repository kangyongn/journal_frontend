import {saveUserToState, saveTokenToState} from '../action/UserAction.js';
import {saveJournalsToState} from '../action/JournalAction.js';

export const postSignup = user => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(info => {
      if (info.jwt) {
        dispatch(saveUserToState(info.user))
        dispatch(saveTokenToState(info.jwt))
        localStorage.setItem('jwt', info.jwt)
      }
    })
  }
}

export const postLogin = user => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(info => {
      if (info.jwt) {
        dispatch(saveUserToState(info.user))
        dispatch(saveTokenToState(info.jwt))
        dispatch(saveJournalsToState(info.journals))
        localStorage.setItem('jwt', info.jwt)
      }
    })
  }
}

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/current_user', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(info => {
      dispatch(saveUserToState(info.user))
      dispatch(saveTokenToState(localStorage.getItem('jwt')))
      dispatch(saveJournalsToState(info.journals))
    })
  }
}
