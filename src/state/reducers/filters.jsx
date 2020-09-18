//Filter defaultstate and reducer
const filtersReducerDefaultState = {
  searchTerm: '',
  startDate: undefined,
  endDate: undefined,
  completed: false
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_SEARCH_TERM':
      return {...state, searchTerm: action.text}
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate}
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate}
    case 'SET_TASK_STATE':
      return {...state, isCompleted: action.isCompleted}
    default:
      return state;
  }
}

export default filtersReducer;