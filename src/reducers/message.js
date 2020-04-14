import { DISMISS_MESSAGE } from '../actions/constants';
const initialState = null;

function message(state = initialState, { type, payload }) {
  if (type === DISMISS_MESSAGE) {
    return initialState;
  } else if (payload?.message?.text) {
    return payload.message;
  }
  return state;
}

export default message;
