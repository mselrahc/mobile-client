import { normalize } from '../utils/normalize';
import {
  GET_ITEMS_FAILURE,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  SET_ITEMS_SEARCH,
  SAVE_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
} from '../actions/constants';

const initialState = {
  data: {},
  nextPage: 0,
  pageSize: 10,
  totalCount: 0,
  searchText: '',
  isLoading: false,
};

function items(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ITEMS_REQUEST: {
      const { data, nextPage } = payload.fromBeginning ? initialState : state;

      return {
        ...state,
        data,
        nextPage,
        isLoading: true,
      };
    }
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...normalize(payload.list) },
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
        searchText: payload.text,
      };
    case SAVE_ITEM_SUCCESS: {
      const { data, searchText } = state;
      const { data: newItem } = payload;

      return {
        ...state,
        data: filterItems({ ...data, [payload.data.id]: newItem }, searchText),
      };
    }
    case REMOVE_ITEM_SUCCESS: {
      const { [payload.data.id]: removed, ...rest } = state.data;

      return {
        ...state,
        data: rest,
      };
    }
    default:
      return state;
  }
}

function filterItems(itemsObject, searchText) {
  return normalize(
    Object.values(itemsObject).filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    ),
  );
}

export default items;
