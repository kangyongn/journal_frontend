import {saveJournalToState, editJournalInState} from '../action/JournalAction.js';

export const postJournal = journal => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/journals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(journal)
    })
    .then(res => res.json())
    .then(journal => {
      dispatch(saveJournalToState(journal))
    })
  }
}

export const patchJournal = (id, content) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/journals/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({content: content})
    })
    .then(res => res.json())
    .then(journal => {
      dispatch(editJournalInState(journal))
    })
  }
}
