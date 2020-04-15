import {
  GET_ITEMS_REQUEST,
  GET_ITEM_REQUEST,
  SAVE_ITEM_REQUEST,
  SET_ITEMS_SEARCH,
  REMOVE_ITEM_REQUEST,
} from './constants';

function getItems(fromBeginning = true) {
  return {
    type: GET_ITEMS_REQUEST,
    payload: {
      fromBeginning,
    },
  };
}

function getMoreItems() {
  return getItems(false);
}

function setItemSearch(text) {
  return {
    type: SET_ITEMS_SEARCH,
    payload: { text },
  };
}

function getItem(id) {
  return {
    type: GET_ITEM_REQUEST,
    payload: { id },
  };
}

function saveItem(item) {
  return {
    type: SAVE_ITEM_REQUEST,
    payload: { item },
  };
}

function removeItem(id) {
  return {
    type: REMOVE_ITEM_REQUEST,
    payload: { id },
  };
}

export { getItems, getMoreItems, setItemSearch, getItem, saveItem, removeItem };
