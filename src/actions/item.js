import { REMOVE_ITEM_ERRORS, RESET_ITEM_SAVED } from './constants';

function removeError(key) {
  return {
    type: REMOVE_ITEM_ERRORS,
    payload: {
      key: key,
    },
  };
}

function removeSaved() {
  return {
    type: RESET_ITEM_SAVED,
  };
}

export { removeError, removeSaved };
