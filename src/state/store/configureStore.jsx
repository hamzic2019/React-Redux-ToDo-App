import {createStore, combineReducers} from 'redux';
import todosReducer from './../reducers/todos';
import filtersReducer from './../reducers/filters';

const store = createStore(combineReducers({
  todos: todosReducer,
  filters: filtersReducer
}));

export default store;