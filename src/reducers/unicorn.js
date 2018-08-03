import { SHOW_UNICORN, HIDE_UNICORN } from '../constants/ActionTypes'

const initialState = {
  showing: false,
}

const unicorn = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_UNICORN:
      return {
        showing: true,
      }
    case HIDE_UNICORN:
      return {
        showing: false,
      }
    default:
      return state
  }
}

export default unicorn
