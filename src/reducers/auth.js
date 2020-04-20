import { LOGIN, LOGOUT, RESTORE_TOKEN } from '../actions/constants';

const initialState = {
  username: null,
  token: null,
  isLoading: true,
};

function auth(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN.success:
    case RESTORE_TOKEN.success:
      return {
        ...state,
        username: payload.username,
        token: payload.token,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        username: null,
        token: null,
      };
    default:
      return state;
  }
}

export default auth;
