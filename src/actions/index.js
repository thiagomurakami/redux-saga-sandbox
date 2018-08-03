import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO_REQUEST, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
})
export const openPrompt = () => ({ type: types.OPEN_PROMPT })
export const clearPrompt = () => ({ type: types.CLEAR_PROMPT })
export const confirm = () => ({ type: types.CONFIRM_YES })
export const cancel = () => ({ type: types.CONFIRM_NO })
