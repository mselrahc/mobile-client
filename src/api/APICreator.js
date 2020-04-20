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

    add: async entity => {
      return await commonAxios.post(pathname, entity);
    },

    edit: async (id, entity) => {
      return await commonAxios.put(`${pathname}/${entity.id}`, entity);
    },

    remove: async id => {
      return await commonAxios.delete(`${pathname}/${id}`);
    },
  };
}

export { createCommonAPI };
