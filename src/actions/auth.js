import { LOGIN, LOGOUT, RESTORE_TOKEN } from './constants';

export function login(userdata, onLoginSuccess, onLoginFailure) {
  return {
    type: LOGIN.request,
    payload: { userdata, onLoginSuccess, onLoginFailure },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function restoreToken() {
  return {
    type: RESTORE_TOKEN.request,
  };
}
