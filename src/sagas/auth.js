import AsyncStorage from '@react-native-community/async-storage';
import { put, takeLatest, call } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from '../actions/auth';
import { LOGIN, LOGOUT, RESTORE_TOKEN } from '../actions/constants';
import { commonAxios } from '../utils/api';

function* login({ payload }) {
  const { userdata, onLoginSuccess, onLoginFailure } = payload;
  try {
    const data = yield commonAxios.post('auth/signin', userdata);
    const { username, token } = data;
    console.log('login', username, token);

    yield AsyncStorage.setItem('username', username);
    yield AsyncStorage.setItem('token', token);

    yield put(loginSuccess(username, token));
    if (typeof onLoginSuccess === 'function') {
      onLoginSuccess();
    }
  } catch (error) {
    yield put(loginFailure(error));
    if (typeof onLoginFailure === 'function') {
      onLoginFailure();
    }
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN.request, login);
}

function* logout() {
  yield AsyncStorage.removeItem('username');
  yield AsyncStorage.removeItem('token');
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}

const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* restoreToken() {
  yield call(delay, 2000);
  try {
    const username = yield AsyncStorage.getItem('username');
    const token = yield AsyncStorage.getItem('token');
    yield put(loginSuccess(username, token));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* watchRestoreToken() {
  yield takeLatest(RESTORE_TOKEN, restoreToken);
}
