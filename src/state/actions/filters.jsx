// Actions-filter

// ADD_SEARCH_TERM
export const setSearchTerm = ({text = ''} = {}) => ({
  type: 'ADD_SEARCH_TERM',
  text
})
// SET_START_DATE
export const setStartDate = ({startDate} = {}) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
export const setEndDate = ({endDate}) => ({
  type: 'SET_END_DATE',
  endDate
})
// SET_TASK_STATE isCompleted true || false
export const setTaskState = ({isCompleted = false} = {}) => ({
  type: 'SET_TASK_STATE',
  isCompleted
})

