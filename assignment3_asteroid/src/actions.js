import store from './state';
import { INCREASE_SCORE } from './options'

const { dispatch, getState } = store;

export const increaseScore = () => {
  dispatch({
    type: INCREASE_SCORE,
    payload: 10
  })
}
