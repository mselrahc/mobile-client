import { call, put, select, takeLatest } from 'redux-saga/effects';
import Message from '../utils/message';

function createCommonSaga(entityName, api, actionTypes) {
  function* getAll() {
    try {
      const { searchText, nextPage, pageSize } = yield select(
        state => state[entityName],
      );
      const data = yield call(api.getAll, {
        searchText,
        currentPage: nextPage,
        pageSize,
      });
      yield put({
        type: actionTypes.getAll.success,
        payload: data,
      });
    } catch (error) {
      yield put({
        type: actionTypes.getAll.failure,
        payload: {
          message: Message.error(error.message),
        },
      });
    }
  }

  function* save({ payload }) {
    try {
      const { id, entity, onSaveSuccess } = payload;
      const data = yield call(id === undefined ? api.add : api.edit, entity);

      const text = (entity.id === undefined ? 'Add' : 'Edit') + ' success';
      yield put({
        type: actionTypes.save.success,
        payload: {
          data,
          message: Message.success(text),
        },
      });
      onSaveSuccess();
    } catch (error) {
      yield put({
        type: actionTypes.save.failure,
        payload: {
          message: Message.error(error.message),
        },
      });
      payload.onSaveFailure(error.data);
    }
  }

  function* remove({ payload }) {
    try {
      const { id } = payload;
      const data = yield call(api.remove, id);

      yield put({
        type: actionTypes.remove.success,
        payload: {
          data,
          message: Message.success('Remove success'),
        },
      });
    } catch (error) {
      yield put({
        type: actionTypes.remove.failure,
        payload: {
          errors: error.data,
          message: Message.error(error.message),
        },
      });
    }
  }

  return {
    watchGetAll: function* watchGetAll() {
      yield takeLatest(actionTypes.getAll.request, getAll);
    },
    watchSave: function* watchSave() {
      yield takeLatest(actionTypes.save.request, save);
    },
    watchRemove: function* watchRemove() {
      yield takeLatest(actionTypes.remove.request, remove);
    },
  };
}

export { createCommonSaga };
