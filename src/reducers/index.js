import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import unicorn from './unicorn'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  unicorn,
})

export default rootReducer
