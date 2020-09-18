import {v4 as uuid} from 'uuid';

// ACTIONS-TASKS

// ADD_NEW_TASK
export const addTask = ({title = '', description = '' }={}) => ({
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
export const removeTask = ({id} = {}) => ({
  type: 'REMOVE_TASK',
  id
})
// EDIT_TASK
export const editTask = ({id, update} = {}) => ({
  type: 'EDIT_TASK',
  id,
  update
})