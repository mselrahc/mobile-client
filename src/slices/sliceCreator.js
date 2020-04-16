import { createCommonActionType } from '../actions/actionTypeCreator';
import { createCommonActionCreator } from '../actions/actionCreatorCreator';
import { createCommonAPI } from '../api/APICreator';
import { createCommonSaga } from '../sagas/sagaCreator';
import { createCommonReducer } from '../reducers/reducerCreator';
import { createCommonSelector } from '../selectors/selectorCreator';

/**
 * @param {{selectId: (any) => any, filter: (entity, searchText) => boolean}} reducerOptions
 */
function createSlice(entity, apiPath, reducerOptions) {
  const actionTypes = createCommonActionType(entity);
  const actionCreator = createCommonActionCreator(actionTypes);
  const api = createCommonAPI(apiPath);
  const sagas = createCommonSaga(entity, api, actionTypes);
  const reducers = createCommonReducer(actionTypes, reducerOptions);
  const selectors = createCommonSelector(entity);

  return {
    actions: actionCreator,
    sagas,
    reducers,
    selectors,
  };
}

export { createSlice };
