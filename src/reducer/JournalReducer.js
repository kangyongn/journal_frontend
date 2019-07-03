const initialState = {
  all: []
}

const journalReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_JOURNAL_TO_STATE':
      return {
        all: [...state.all, action.payload]
      }

    case 'SAVE_JOURNALS_TO_STATE':
      return {
        all: action.payload
      }

    default:
      return state
  }

}

export default journalReducer
