import {saveUserToState, saveTokenToState} from '../action/UserAction.js';

export const postSignup = user => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
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
      }
    })
  }
}
