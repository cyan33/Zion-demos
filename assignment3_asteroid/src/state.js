import { createStore } from 'redux'
import root from './reducer'

const initState = {
  score: 10
}

let store = createStore(root,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
