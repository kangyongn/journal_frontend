export const saveUserToState = user => {
  return {type: 'SAVE_USER_TO_STATE', payload: user}
}

export const saveTokenToState = token => {
  return {type: 'SAVE_TOKEN_TO_STATE', payload: token}
}
