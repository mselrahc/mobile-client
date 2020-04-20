import AsyncStorage from '@react-native-community/async-storage';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, RESTORE_TOKEN } from '../actions/constants';
import { commonAxios } from '../utils/api';
import Message from '../utils/message';

function* login({ payload }) {
  const { userdata, onLoginSuccess, onLoginFailure } = payload;
  try {
    const data = yield commonAxios.post('auth/signin', userdata);
    const { username, token } = data;

    yield AsyncStorage.setItem('username', username);
    yield AsyncStorage.setItem('token', token);

    yield put({
      type: LOGIN.success,
      payload: {
        username,
        token,
      },
    });
    if (typeof onLoginSuccess === 'function') {
      onLoginSuccess();
    }
  } catch (error) {
    yield put({
      type: LOGIN.failure,
      payload: {
        message: Message.error(error.message),
      },
    });
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
  yield call(delay, 1000);
  try {
    const username = yield AsyncStorage.getItem('username');
    const token = yield AsyncStorage.getItem('token');
    yield put({
      type: RESTORE_TOKEN.success,
      payload: {
        username,
        token,
      },
    });
  } catch (error) {
    yield put({
      type: RESTORE_TOKEN.failure,
      payload: {
        message: Message.error(error.message),
      },
    });
  }
}

export function* watchRestoreToken() {
  yield takeLatest(RESTORE_TOKEN.request, restoreToken);
}
