import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddlware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import { unicornSaga, deleteTodoSaga } from './sagas'
import myMiddleware from './my-middleware'

const sagaMiddleware = createSagaMiddlware()

function* rootSaga() {
  yield all([unicornSaga(), deleteTodoSaga()])
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, myMiddleware)
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
