import { commonAxios } from '../utils/api';

export const getItems = async ({ searchText, pageSize, currentPage }) => {
  return await commonAxios.get('items', {
    params: {
      q: searchText,
      size: pageSize,
      page: currentPage,
    },
  });
};

export const getItem = async id => {
  return await commonAxios.get(id);
};

export const addItem = async item => {
  return await commonAxios.post('items', item);
};

export const editItem = async item => {
  return await commonAxios.put('items/' + item.id, item);
};

export const removeItem = async id => {
  return await commonAxios.delete('items/' + id);
};

export default {
  getItem,
  getItems,
  addItem,
  editItem,
  removeItem,
};
