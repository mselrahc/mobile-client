import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  SAVE_ITEM_FAILURE,
  SAVE_ITEM_REQUEST,
  SAVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_REQUEST,
} from '../actions/constants';
import api from '../api/itemsAPI';
import Message from '../utils/message';

export function* getItems() {
  try {
    const { searchText, nextPage, pageSize } = yield select(
      state => state.items,
    );

    const data = yield call(api.getItems, {
      searchText,
      currentPage: nextPage,
      pageSize,
    });
    yield put({ type: GET_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: GET_ITEMS_FAILURE,
      payload: {
        message: Message.error(error.message),
      },
    });
  }
}

export function* watchGetItems() {
  yield takeLatest(GET_ITEMS_REQUEST, getItems);
}

export function* saveItem({ payload }) {
  try {
    const { item } = payload;
    const data = yield call(
      item.id === undefined ? api.addItem : api.editItem,
      item,
    );

    const text = (item.id === undefined ? 'Add' : 'Edit') + ' success';
    yield put({
      type: SAVE_ITEM_SUCCESS,
      payload: { data, message: Message.success(text) },
    });
  } catch (error) {
    yield put({
      type: SAVE_ITEM_FAILURE,
      payload: {
        errors: error.data,
        message: Message.error(error.message),
      },
    });
  }
}

export function* watchSaveItem() {
  yield takeLatest(SAVE_ITEM_REQUEST, saveItem);
}

export function* removeItem({ payload }) {
  try {
    const { id } = payload;
    const data = yield call(api.removeItem, id);

    yield put({
      type: REMOVE_ITEM_SUCCESS,
      payload: { data, message: Message.success('Remove success') },
    });
  } catch (error) {
    yield put({
      type: REMOVE_ITEM_FAILURE,
      payload: {
        errors: error.data,
        message: Message.error(error.message),
      },
    });
  }
}

export function* watchRemoveItem() {
  yield takeLatest(REMOVE_ITEM_REQUEST, removeItem);
}
