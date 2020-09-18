import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';



// ACTIONS-TASKS

// ADD_NEW_TASK
const addTask = ({title = '', description = '' }={}) => ({
  type: 'ADD_NEW_TASK',
  task: {
    id: uuid(),
    title,
    description,
    createdAt: new Date().getTime(),
    taskState: false
  }
})
// REMOVE_TASK
const removeTask = ({id} = {}) => ({
  type: 'REMOVE_TASK',
  id
})
// EDIT_TASK
const editTask = ({id, update} = {}) => ({
  type: 'EDIT_TASK',
  id,
  update
})

// Actions-filter

// ADD_SEARCH_TERM
const setSearchTerm = ({text = ''} = {}) => ({
  type: 'ADD_SEARCH_TERM',
  text
})
// SET_START_DATE
const setStartDate = ({startDate} = {}) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = ({endDate}) => ({
  type: 'SET_END_DATE',
  endDate
})
// SET_TASK_STATE isCompleted true || false
const setTaskState = ({isCompleted = false} = {}) => ({
  type: 'SET_TASK_STATE',
  isCompleted
})





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

//Todos defaultstate and reducer
const todosReducerDefaultState = []
const todosReducer = (state = todosReducerDefaultState , action) => {
  switch(action.type){
    case 'ADD_NEW_TASK':
      return [...state, {...action.task}]
    case 'REMOVE_TASK':
      return [...state.filter((todo) => todo.id === action.id ? false : true)];
    case 'EDIT_TASK':
      return [...state.map((todo) => {
        if(todo.id === action.id){
          return {...todo,...action.update}
        }else {
          return todo;
        }
      })]
    default:
      return state;
  }
} 

const store = createStore(combineReducers({
  todos: todosReducer,
  filters: filtersReducer
}));


const VisibleDate = (todos, {startDate = undefined, endDate = undefined, searchTerm = ''} = {}) => {
  return todos.filter((todo) => {
    const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate; 
    const searchTermMatch = todo.title.includes(searchTerm) || false;

    return startDateMatch && endDateMatch && searchTermMatch;
  });
   
}

const unsubscribe = store.subscribe(() => {
  const UI = store.getState();
  const newData = VisibleDate(UI.todos, UI.filters);
  console.log(newData);
  //console.log(UI);
});


const s1 = store.dispatch(addTask({
  title: 'Kupiti Novi Auto', 
  description: 'Mozda jos nesto uraditi nisam bas ni siguran!'
}));

const s2 = store.dispatch(addTask({
  title: 'Kupiti kucu', 
  description: 'Mozda jos nesto uraditi nisam bas ni siguran!'
}));


// Remove TASK
const id2Remove = s1.task.id;
//store.dispatch(removeTask({id: id2Remove}));


// UPDATE - EDIT TASK
//store.dispatch(editTask({id: id2Remove, update: {title: 'KUPITI AVION'}}))



store.dispatch(setStartDate({startDate: 1600383889461}));

store.dispatch(setSearchTerm({text: 'kucu'}));