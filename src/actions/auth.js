import { LOGIN, LOGOUT, RESTORE_TOKEN } from './constants';
import Message from '../utils/message';

export function login(userdata, onLoginSuccess, onLoginFailure) {
  return {
    type: LOGIN.request,
    payload: { userdata, onLoginSuccess, onLoginFailure },
  };
}

export function loginSuccess(username, token) {
  return {
    type: LOGIN.success,
    payload: {
      username,
      token,
    },
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN.failure,
    payload: {
      message: Message.error(error.message),
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function restoreToken() {
  return {
    type: RESTORE_TOKEN,
  };
}
