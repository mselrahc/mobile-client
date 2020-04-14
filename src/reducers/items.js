import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  SET_ITEMS_SEARCH,
  SAVE_ITEM_REQUEST,
  SAVE_ITEM_SUCCESS,
  SAVE_ITEM_FAILURE,
} from '../actions/constants';

const initialState = {
  data: [],
  nextPage: 0,
  pageSize: 5,
  totalCount: 0,
  searchText: '',
  isLoading: false,
};

function items(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ITEMS_REQUEST:
      const { data, nextPage } = payload.fromBeginning ? initialState : state;
      return {
        ...state,
        data,
        nextPage,
        isLoading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload.list],
        totalCount: payload.total,
        nextPage: state.nextPage + 1,
        isLoading: false,
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ITEMS_SEARCH:
      return {
        ...state,
        searchText: payload,
      };
    case SAVE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SAVE_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default items;
