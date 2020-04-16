import { commonAxios } from '../utils/api';

function createCommonAPI(pathname) {
  return {
    getAll: async ({ searchText, pageSize, currentPage }) => {
      return await commonAxios.get(pathname, {
        params: {
          q: searchText,
          size: pageSize,
          page: currentPage,
        },
      });
    },

    get: async id => {
      return await commonAxios.get(id);
    },

    add: async item => {
      return await commonAxios.post(pathname, item);
    },

    edit: async item => {
      return await commonAxios.put(`${pathname}/${item.id}`, item);
    },

    remove: async id => {
      return await commonAxios.delete(`${pathname}/${id}`);
    },
  };
}

export { createCommonAPI };
