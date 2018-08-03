import { delay } from 'redux-saga'
import { call, put, take, race } from 'redux-saga/effects'
import {
  COMPLETE_TODO,
  DELETE_TODO,
  DELETE_TODO_REQUEST,
  SHOW_UNICORN,
  HIDE_UNICORN,
  CONFIRM_NO,
  CONFIRM_YES,
} from '../constants/ActionTypes'
import { openPrompt, clearPrompt } from '../actions'

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

function* confirmSaga(showAction, hideAction) {
  yield put(showAction())
  const { confirmed } = yield race({
    canceled: take(CONFIRM_NO),
    confirmed: take(CONFIRM_YES),
  })
  yield put(hideAction())
  return !!confirmed
}

function* deleteTodoSaga() {
  while (true) {
    const action = yield take(DELETE_TODO_REQUEST)
    const confirmed = yield call(confirmSaga, openPrompt, clearPrompt)
    if (!confirmed) {
      continue
    }
    yield put({
      type: DELETE_TODO,
      id: action.id,
    })
  }
}

export { unicornSaga, deleteTodoSaga }
