import { commonAxios } from '../utils/api';

export const getItems = async ({ searchText, pageSize, currentPage }) => {
  const data = await commonAxios.get('items', {
    params: {
      q: searchText,
      size: pageSize,
      page: currentPage,
    },
  });

  return data;
};

export const getItem = async id => {
  const { data } = await commonAxios.get(id);
  return data;
};

export const addItem = async item => {
  const { data } = await commonAxios.post('items', item);
  return data;
};

export const editItem = async item => {
  const { data } = await commonAxios.put('items/' + item.id, item);
  return data;
};

export const removeItem = async id => {
  const { data } = await commonAxios.delete(id);
  return data;
};

export default {
  getItem,
  getItems,
  addItem,
  editItem,
  removeItem,
};
