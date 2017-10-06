import { createStore } from '@changyan/mini-observer'
import root from './reducer'

const initState = {
  score: 10
}

let store = createStore(root, initState)

export default store
