import { delay } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import {
  COMPLETE_TODO,
  SHOW_UNICORN,
  HIDE_UNICORN,
} from '../constants/ActionTypes'

function* unicornSaga() {
  let completedTasks = 0
  while (true) {
    yield take(COMPLETE_TODO)
    completedTasks++
    if (completedTasks > 0 && completedTasks % 3 === 0) {
      yield call(delay, 100)
      yield put({ type: SHOW_UNICORN })
      yield call(delay, 1500)
      yield put({ type: HIDE_UNICORN })
    }
    console.log(completedTasks)
  }
}

export { unicornSaga }
