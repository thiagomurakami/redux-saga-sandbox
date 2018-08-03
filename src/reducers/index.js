import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import unicorn from './unicorn'
import confirmation from './confirmation'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  unicorn,
  confirmation,
})

export default rootReducer
