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

    case 'REMOVE_JOURNALS_FROM_STATE':
      return initialState

    case 'EDIT_JOURNAL_IN_STATE':
      const editedJournals = state.all.map(journal => {
        if(journal.id === action.payload.id) {
          return action.payload
        } else {
          return journal
        }
      })
      return {
        all: editedJournals
      }

    default:
      return state
  }

}

export default journalReducer
