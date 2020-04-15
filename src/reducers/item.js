import {
  SAVE_ITEM_FAILURE,
  SAVE_ITEM_REQUEST,
  SAVE_ITEM_SUCCESS,
  REMOVE_ITEM_ERRORS,
  RESET_ITEM_SAVED,
} from '../actions/constants';

const initialState = {
  itemSaved: false,
  isLoading: false,
  validationErrors: null,
};

function item(state = initialState, { type, payload }) {
  switch (type) {
    case SAVE_ITEM_REQUEST:
      return { isLoading: true, validationErrors: null };
    case SAVE_ITEM_SUCCESS:
      return { isLoading: false, validationErrors: null, itemSaved: true };
    case SAVE_ITEM_FAILURE:
      return { isLoading: false, validationErrors: payload.errors };
    case REMOVE_ITEM_ERRORS:
      if (payload.key === undefined) {
        return { ...state, validationErrors: {} };
      } else {
        const { [payload.key]: _, ...rest } = state.validationErrors || {};
        return { ...state, validationErrors: rest };
      }
    case RESET_ITEM_SAVED:
      return { ...state, itemSaved: false };
    default:
      return state;
  }
}

export default item;
