import { INCREASE_SCORE } from './options'

export default function root(state = {}, action) {
  let {
    score
  } = state

  switch(action.type) {
    case INCREASE_SCORE:
      return Object.assign({}, state, { score:  score + action.payload })
    default:
      return state
  }
}