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


export default todosReducer;