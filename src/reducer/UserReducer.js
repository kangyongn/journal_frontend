const initialState = {
  id: 0,
  token: ''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_USER_TO_STATE':
      return {
        ...state,
        id: action.payload.id
      };

    case 'SAVE_TOKEN_TO_STATE':
      return {
        ...state,
        token: action.payload
      }
  }
}

export default userReducer
