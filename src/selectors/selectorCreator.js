import { createSelector } from 'reselect';

function createCommonSelector(entity) {
  const getEntityState = state => state[entity];
  const getDataArray = createSelector([getEntityState], state =>
    Object.values(state.data),
  );
  const getHasMore = createSelector(
    [getEntityState, getDataArray],
    (state, data) => state.totalCount > data.length,
  );

  return { getDataArray, getHasMore };
}

export { createCommonSelector };
