export const saveJournalToState = journal => {
  return {type: 'SAVE_JOURNAL_TO_STATE', payload: journal}
}

export const saveJournalsToState = journals => {
  return {type: 'SAVE_JOURNALS_TO_STATE', payload: journals}
}
