const Action = {
  GET_ALL: 'GET_ALL',
  GET: 'GET_ONE',
  SAVE: 'SAVE',
  REMOVE: 'REMOVE',
};

const Status = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

function createCommonActionType(entity) {
  entity = entity.toUpperCase();
  return {
    getAll: createAsyncActionType(Action.GET_ALL, entity),
    get: createAsyncActionType(Action.GET, entity),
    save: createAsyncActionType(Action.SAVE, entity),
    remove: createAsyncActionType(Action.REMOVE, entity),
    set: {
      searchText: `SET_${entity}_SEARCH`,
    },
  };
}

function createAsyncActionType(action, entity) {
  const prefix = `${action}_${entity}`;
  return {
    request: `${prefix}_${Status.REQUEST}`,
    success: `${prefix}_${Status.SUCCESS}`,
    failure: `${prefix}_${Status.FAILURE}`,
  };
}

export { createCommonActionType };
