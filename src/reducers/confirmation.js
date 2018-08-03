import { OPEN_PROMPT, CLEAR_PROMPT } from '../constants/ActionTypes'

const initialState = {
  showing: false,
}

const unicorn = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PROMPT:
      return {
        showing: true,
      }
    case CLEAR_PROMPT:
      return {
        showing: false,
      }
    default:
      return state
  }
}

export default unicorn
