import { filterNormalized, normalize } from '../utils/normalize';

/**
 * @param {{selectId: (any) => any, filter: (entity, searchText) => boolean}} options
 */
function createCommonReducer(actionTypes, options) {
  const selectId = options.selectId || (entity => entity.id);

  const initialState = {
    data: {},
    nextPage: 0,
    pageSize: 10,
    totalCount: 0,
    searchText: '',
    isLoading: false,
    ...options.initialState,
  };

  const filterEntities = (entities, searchText) => {
    const entityFilter = entity => options.filter(entity, searchText);
    return filterNormalized(entities, entityFilter);
  };

  return (state = initialState, { type, payload }) => {
    switch (type) {
      case actionTypes.getAll.request: {
        const { data, nextPage } = payload.fromBeginning ? initialState : state;

        return {
          ...state,
          data,
          nextPage,
          isLoading: true,
        };
      }
      case actionTypes.getAll.success:
        return {
          ...state,
          data: { ...state.data, ...normalize(payload.list) },
          totalCount: payload.total,
          nextPage: state.nextPage + 1,
          isLoading: false,
        };
      case actionTypes.getAll.failure:
      case actionTypes.remove.failure:
        return {
          ...state,
          isLoading: false,
        };
      case actionTypes.set.searchText:
        return {
          ...state,
          searchText: payload.text,
        };
      case actionTypes.save.success: {
        const { data, searchText } = state;
        const { data: newEntity } = payload;

        return {
          ...state,
          data: filterEntities(
            { ...data, [selectId(newEntity)]: newEntity },
            searchText,
          ),
        };
      }
      case actionTypes.remove.request:
        return {
          ...state,
          isLoading: true,
        };
      case actionTypes.remove.success: {
        const { [selectId(payload.data)]: removed, ...rest } = state.data;

        return {
          ...state,
          data: rest,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };
}

export { createCommonReducer };
